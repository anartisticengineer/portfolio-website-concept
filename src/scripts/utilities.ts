const containerClasses = (isDark: boolean): string => {
    return `container ${isDark?"container--dark":null}`;
}

const fadeUp = (): string => {
    return `animate__animated animate__fadeInUp`;
}

const navLinksHidden = (isHidden: boolean): string => {
    return `navbar__links${isHidden ? '--hidden':''}`;
}

export {containerClasses, fadeUp, navLinksHidden};