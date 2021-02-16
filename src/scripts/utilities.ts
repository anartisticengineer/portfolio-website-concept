const utils = {
    containerClasses: (isDark: boolean): string => {
        return `container ${isDark?"container--dark":null}`;
    },
    fadeUp: (): string => {
        return `animate__animated animate__fadeInUp`;
    },
    navLinksHidden: (isHidden: boolean): string => {
        return `navbar__links${isHidden ? '--hidden':''}`;
    },
    btnClasses: (classNames: string | string[] | void): string => {
        let allClasses: string = "btn";
        if (classNames){
            if (typeof classNames === "string"){
                allClasses += ` ${classNames}`;
            }
            else if (typeof classNames === "object"){
                allClasses += ` ${classNames.join(" ")}`;
            }
        }
        return allClasses;
    }
}

export default utils;