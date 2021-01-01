const containerClasses = (isDark) => {
    return `container ${isDark?"container--dark":null}`;
}

const fadeUp = () => {
    return `animate__animated animate__fadeInUp`;
}

export {containerClasses, fadeUp};