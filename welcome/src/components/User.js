import React from "react";
import "./User.scss";
import InputField from "./InputField";
import {dateFromEpoch} from "../utils/Date";
import {highestAuthority} from "../utils/UserRole";
import I18n from "../locale/I18n";
import Logo from "./Logo";
import {Card, CardType} from "@surfnet/sds";
import {isEmpty} from "../utils/Utils";
import {RoleMetaData} from "./RoleMetaData";

export const User = ({user}) => {

    const attribute = (index, name, isDate = false) => {
        const attr = user[name];
        return (
            <InputField noInput={true}
                        key={index}
                        disabled={true}
                        value={attr ? (isDate ? dateFromEpoch(attr) : attr) : "-"}
                        name={I18n.t(`users.${name}`)}/>
        )
    }

    const renderUserRole = (userRole, index) => {
        const role = userRole.role;
        const provider = user.providers.find(data => data.id === role.manageId) || {};
        const logo = provider.data.metaDataFields["logo:0:url"];
        const children =
            <div key={index} className={"user-role"}>
                <Logo src={logo} alt={"provider"} className={"provider"}/>
                <section className={"user-role-info"}>
                    <h3>{role.name}</h3>
                    <p>{role.description}</p>
                    <RoleMetaData role={role} user={user} provider={provider}/>
                </section>
            </div>;
        return (
            <Card cardType={CardType.Big} children={children}/>
        );
    }

    user.highestAuthority = highestAuthority(user);
    const attributes = [];
    return (
        <section className={"user"}>
            {attributes.map((attr, index) => attribute(index, attr[0], attr[1]))}

            <h3 className={"title span-row "}>{I18n.t("users.roles")}</h3>
            {isEmpty(user.userRoles) && <p className={"span-row "}>{I18n.t("users.noRolesInfo")}</p>}
            {!isEmpty(user.userRoles) &&
                <>
                    <p className={"span-row"}>
                        {I18n.t(`users.rolesInfo`, {name: user.name})}
                    </p>
                    {user.userRoles.map((userRole, index) => renderUserRole(userRole, index))}
                </>}
        </section>
    );
}