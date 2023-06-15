import I18n from "../locale/I18n";
import React, {useState} from "react";
import "./UserMenu.scss";
import {Link, useNavigate} from "react-router-dom";
import {stopEvent} from "../utils/Utils";
import {UserInfo} from "@surfnet/sds";
import {useAppStore} from "../stores/AppStore";
import {logout} from "../api";


export const UserMenu = ({user, config, actions}) => {
    const navigate = useNavigate();

    const [dropDownActive, setDropDownActive] = useState(false);

    const {clearFlash, objectRole} = useAppStore((state) => state);

    const toggleUserMenu = () => {
        setDropDownActive(false);
        clearFlash();
    }

    const logoutUser = e => {
        stopEvent(e);
        useAppStore.setState(() => ({user: null, impersonator: null, breadcrumbPath:[]}));
        logout().then(() => {
            navigate("/login?force=true");
        });
    }

    const renderMenu = (adminLinks) => {
        return (<>
                <ul>
                    {user.superUser && adminLinks.map(l => <li key={l}>
                        <Link onClick={toggleUserMenu} to={`/${l}`}>{I18n.t(`header.links.${l}`)}</Link>
                    </li>)}
                    <li>
                        <Link onClick={toggleUserMenu} to={`/profile`}>{I18n.t(`header.links.profile`)}</Link>
                    </li>
                    {actions.map(action => <li key={action.name}>
                        <a href={`/${action.name}`} onClick={action.perform}>{action.name}</a>
                    </li>)}
                </ul>
                <ul>
                    <li>
                        <a href="/logout" onClick={logoutUser}>{I18n.t(`header.links.logout`)}</a>
                    </li>
                </ul>
            </>
        )
    }

    const adminLinks = ["system"];
    if (config.impersonationAllowed) {
        adminLinks.push("impersonate")
    }
    return (
        <div className="user-menu"
             tabIndex={1}
             onBlur={() => setTimeout(() => setDropDownActive(false), 250)}>
            <UserInfo isOpen={dropDownActive}
                      children={renderMenu(adminLinks)}
                      organisationName={objectRole || ""}
                      userName={user.name}
                      toggle={() => setDropDownActive(!dropDownActive)}
            />
        </div>
    );


}
