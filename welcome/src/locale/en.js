const en = {
    code: "EN",
    name: "English",
    select_locale: "Change language to English",
    landing: {
        header: {
            title: "Get access to your applications",
            login: "Login",
            sup: "The SURFwelcome application is by invite only.",
        },
        works: "How does it work?",
        adminFunction: "admin function",
        info: [
            //Arrays of titles and info blocks and if a function is an admin function
            ["Invites", "<p>SURF invites institution managers who can create roles for their applications.</p>" +
            "<p>Applications are services connected to SURFconext.</p>", true],
            ["Roles", "<p>The application managers will invite colleagues for roles who can invite guests.</p>" +
            "<p>Invites.</p>", true],
            ["Join", "<p>Invited colleagues who accept the invitation are granted access rights for the applications.</p><br/>", false],
            ["Groups", "<p>The roles are actually group memberships that can be provisioned to external SCIM API's.</p>", false]
        ],
        footer: "<p>SURFwelcome is a service for access management of Dutch led service providers.</p>" +
            "<p>Do you want to know more? Please visit <a href='https://surf.nl/en/access'>https://surf.nl/en/access</a>.</p>",
    },
    header: {
        title: "SURFwelcome",
        subTitle: "Everything will be Owl right",
        links: {
            login: "Login",
            switchApp: "Go to {{app}}",
            welcome: "Welcome",
            access: "Access",
            help: "Help",
            profile: "Profile",
            logout: "Logout",
            helpUrl: "https://edu.nl/vw3jx"
        },
    },
    home: {
        access: "SURFwelcome",
    },
    access: {
        SUPER_USER: "Super User",
        MANAGER: "Manager",
        INVITER: "Inviter",
        GUEST: "Guest",
        "No member": "No member"
    },
    users: {
        found: "{{count}} {{plural}} found",
        moreResults: "There are more results then shown, please refine your search.",
        name_email: "Name / email",
        name: "Name",
        email: "Email",
        highestAuthority: "Role",
        schacHomeOrganization: "Institution",
        lastActivity: "Last activity",
        eduPersonPrincipalName: "EPPN",
        sub: "Sub",
        singleUser: "user",
        multipleUsers: "users",
        noEntities: "No users found",
        new: "New invitation",
        title: "Users",
        roles: "Applications",
        noRolesInfo: "You have no applications (which means you must be super-user)",
        rolesInfo: "You have access to the following applications.",
        rolesInfoOther: "{{name}} has the following roles",
        landingPage: "Website",
        access: "Access",
        organisation: "Organisation",
        noResults: "No users are found",
        searchPlaceHolder: "Search for users...",
        authority: "Authority",
        endDate: "End date",
        expiryDays: "Expiry days"
    },
    roles: {
        title: "Roles",
        name: "Name",
        namePlaceHolder: "The name of the role",
        shortName: "Short name",
        landingPage: "Website",
        landingPagePlaceHolder: "https://landingpage.com",
        defaultExpiryDays: "Expiry days",
        endDate: "End date",
        authority: "Role",
        yourRole: "Your role",
        description: "Description",
        descriptionPlaceHolder: "The description of the role",
        noResults: "No roles are found",
        noMember: "No member",
        searchPlaceHolder: "Search for roles...",
        found: "{{count}} {{plural}} found",
        singleRole: "role",
        multipleRoles: "roles",
        new: "Add role",
        edit: "Edit role {{name}}",
        urn: "URN",
        manage: "Service",
        manageMetaData: "Manage entity",
        provisioning: "Provisioning",
        deleteFlash: "Role {{name}} has been deleted",
        deleteConfirmation: "Are you sure  you want to delete this role",
        createFlash: "Role {{name}} has been created",
        updateFlash: "Role {{name}} has been updated",
    },
    forms: {
        ok: "Ok",
        and: "and",
        error: "You can <a href=\"mailto:welcome@surf.nl\" target=\"_blank\">contact SURFwelcome</a> for more information.<br/><br/>" +
            "The reference number for ths exception is {{reference}}."
    },

    invitations: {
        found: "{{count}} {{plural}} found",
        singleInvitation: "invitation",
        multipleInvitations: "invitations",
        searchPlaceHolder: "Search for invitation...",
        noResults: "No invitation where found",
        status: "Status",
        open: "Open",
        accepted: "Accepted",
        enforceEmailEquality: "Email equality",
        eduIDOnly: "eduID only",
        new: "New invite",
        invitees: "Invitees",
        inviteesPlaceholder: "Invitee email addresses",
        requiredEmail: "At least one email is required",
        requiredRole: "At least one role is required for a guest invitation",
        intendedAuthority: "Authority",
        roles: "Roles",
        rolesPlaceHolder: "Choose one or more roles",
        expiryDate: "Invitation expiry date",
        roleExpiryDate: "Role expiry date",
        createdAt: "Send",
        message: "Message",
        messagePlaceholder: "Personal message for the invitee included in the invitation",
        invite: "Send invite",
        invalidEmails: "Invalid email addresses removed: {{emails}}.",
        createFlash: "Invitation was send"
    },
    profile: {
        info: "Your account was created on {{createdAt}}"
    },
    inviteOnly: {
        welcome: "Welcome to SURFwelcome",
        roles: "You don't have any roles.",
        info: "The SURFwelcome application is by invite only. If you want to enter, but don't have access, please contact <a href='mailto:access@surf.nl'>welcome@surf.nl</a>.",
        preLogin: "Or ",
        login: "login",
        postLogin: " again with a different institution",
    },
    invitationAccept: {
        hi: "Hi{{name}},",
        nextStep: "Next: enjoy your new role",
        expired: "This invitation has expired at {{expiryDate}}",
        expiredInfo: "Please contact <a href='mailto:{{email}}'>{{email}}</a> and ask this person to send you a new invite.",
        invited: "You have been invited for the {{plural}} {{roles}} by {{inviter}}",
        role: "role",
        roles: "roles",
        progress: "1",
        info: "SURFwelcome provides access to application based on your roles.",
        infoLogin: "You can login with your institution account or edulD.",
        infoLoginAgain: "To accept the invitation you'll need to login again.",
        login: "Login",
        loginWithSub: "Login",
        emailMismatch: "The inviter has indicated that you must accept this invitation with the email {{email}}, " +
            "but you have logged in with an account with an email {{userEmail}}. Please login in with a different account."
    },
    proceed: {
        info: "Congrats! You have accepted the {{plural}} {{roles}} and you now can go to the application",
        progress: "2",
        goto: "Visit application",
        nextStep: "Next: go to the application",
    },
    tooltips: {
        userIcon: "User {{name}} provisioned at {{createdAt}} with last activity on {{lastActivity}}",
        roleIcon: "Role {{name}} created at {{createdAt}}",
        userRoleIcon: "User role accepted by {{name}} at {{createdAt}}",
        invitationIcon: "Invitation for {{email}} send at {{createdAt}} with expiration date {{expiryDate}}",
        roleShortName: "The unique short name of the rol within a provisioning. Is used to format the urn",
        manageService: "The required service from Manage with may have an optional provisioning",
        defaultExpiryDays: "The default number of days the role will expiry when a use accepts a invitation for this role",
        enforceEmailEqualityTooltip: "When checked the invitee must accept the invitation with the email where the invitation was send to",
        eduIDOnlyTooltip: "When checked the invitees will be required to login with eduID",
        roleExpiryDateTooltip: "The end date of this role. After this date the role is removed from the user.",
        expiryDateTooltip: "The date on which this invitation expires",
        rolesTooltip: "All the roles that the invitee will be granted after accepting the invitation",
        intendedAuthorityTooltip: "The authority determines the rights the invitee will be granted after accepting the invitation",
        inviteesTooltip: "Add email addresses separated by comma, space or semi-colon or one-by-one using the enter key. You can also copy & paste a csv file with line-separated email addresses.",
    },
    confirmationDialog: {
        title: "Confirm",
        error: "Error",
        subTitle: "This action requires a confirmation",
        subTitleError: "An error has occurred",
        confirm: "Confirm",
        ok: "OK",
        cancel: "Cancel",
    },
    footer: {
        terms: "Terms of Use",
        termsLink: "https://edu.nl/6wb63",
        privacy: "Privacy policy",
        privacyLink: "https://edu.nl/fcgbd",
        surfLink: "https://surf.nl",
    },
    expirations: {
        expires: "Expires {{relativeTime}}",
        expired: "Expired {{relativeTime}}",
        never: "Never expires",
        activity: {
            now: "Just now",
            seconds: "Today",
            minute: "Today",
            minutes: "Today",
            hour: "Today",
            hours: "Today",
            day: "Yesterday",
            days: "This week",
            week: "This week",
            weeks: "This month",
            month: "Last month",
            months: "%s months ago",
            year: "1 year ago",
            years: "%s years ago"
        },
        ago: {
            now: "just now",
            seconds: "%s seconds ago",
            minute: "1 minute ago",
            minutes: "%s minutes ago",
            hour: "1 hour ago",
            hours: "%s hours ago",
            day: "1 day ago",
            days: "%s days ago",
            week: "1 week ago",
            weeks: "%s weeks ago",
            month: "1 month ago",
            months: "%s months ago",
            year: "1 year ago",
            years: "%s years ago"
        },
        in: {
            now: "right now",
            seconds: "in %s seconds",
            minute: "in 1 minute",
            minutes: "in %s minutes",
            hour: "in 1 hour",
            hours: "in %s hours",
            day: "in 1 day",
            days: "in %s days",
            week: "in 1 week",
            weeks: "in %s weeks",
            month: "in 1 month",
            months: "in %s months",
            year: "in 1 year",
            years: "in %s years"
        }
    }
}

export default en;