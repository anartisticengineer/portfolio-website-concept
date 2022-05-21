const utils = {
  containerClasses: (isDark: boolean): string =>
    `container ${isDark ? 'container--dark' : null}`,

  fadeUp: (): string => 'animate__animated animate__fadeInUp',

  fadeInHorizontal: (direction: 'Left' | 'Right') =>
    `animate__animated animate__fadeIn${direction}`,

  navLinksHidden: (isHidden: boolean): string =>
    `navbar__links${isHidden ? '--hidden' : ''}`,

  btnClasses: (classNames?: string | string[]): string => {
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

  slugify: (title: string): string =>
    title.trim().replace(' ', '-').toLowerCase(),

  encode: (data: FormData | any): string =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
      )
      .join('&'),

  allowSubmission: (formData: {}): boolean => {
    const formValues: string[] = Object.values(formData);
    // eslint-disable-next-line eqeqeq
    return formValues.every((item) => item !== '');
  },

  footerCopyrights: (): string => {
    const date: Date = new Date();
    return `© Justin Johnson 2020${
      date.getFullYear() === 2020 ? '' : ` - ${date.getFullYear()}`
    }`;
  },

  getSeriesDisplayUrl: (): string => 'sample',
};

export default utils;
