import {isEmpty} from "./Utils";

export function login(config, force = false, hash = null) {
    let params = "?app=welcome&"
    if (force) {
        params += "force=true"
    }
    if (hash) {
        params += `&hash=${hash}`
    }
    let serverWelcomeUrl = config.serverWelcomeUrl;
    if (isEmpty(serverWelcomeUrl)) {
        const local = window.location.hostname === "localhost";
        serverWelcomeUrl = local ? "http://localhost:8080" :
            `${window.location.protocol}//${window.location.host}`
    }
    window.location.href = `${serverWelcomeUrl}/api/v1/users/login${params}`;
}
