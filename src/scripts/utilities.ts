const utils = {
  containerClasses: (isDark: boolean): string => `container ${isDark ? 'container--dark' : null}`,

  fadeUp: (): string => 'animate__animated animate__fadeInUp',

  navLinksHidden: (isHidden: boolean): string => `navbar__links${isHidden ? '--hidden' : ''}`,

  btnClasses: (classNames: string | string[] | void): string => {
    let allClasses: string = 'btn';
    if (classNames) {
      if (typeof classNames === 'string') {
        allClasses += ` ${classNames}`;
      } else if (typeof classNames === 'object') {
        allClasses += ` ${classNames.join(' ')}`;
      }
    }
    return allClasses;
  },

  allowSubmission: (formData: {}): boolean => {
    const formValues: string[] = Object.values(formData);
    // eslint-disable-next-line eqeqeq
    return formValues.every((item) => item !== '');
  },

  footerCopyrights: (): string => {
    const date: Date = new Date();
    return `© Justin Johnson 2020${date.getFullYear() === 2020 ? '' : ` - ${date.getFullYear()}`}`;
  },
};

export default utils;
