const containerClasses = (isDark: boolean): string =>
  `container ${isDark ? 'container--dark' : null}`;

const fadeUp = (): string => 'animate__animated animate__fadeInUp';

const fadeInHorizontal = (direction: 'Left' | 'Right') =>
  `animate__animated animate__fadeIn${direction}`;

const navLinksHidden = (isHidden: boolean): string =>
  `navbar__links${isHidden ? '--hidden' : ''}`;

const btnClasses = (classNames?: string | string[]): string => {
  let allClasses: string = 'btn';
  if (classNames) {
    if (typeof classNames === 'string') {
      allClasses += ` ${classNames}`;
    } else if (typeof classNames === 'object') {
      allClasses += ` ${classNames.join(' ')}`;
    }
  }
  return allClasses;
};

export default {
  containerClasses,
  fadeUp,
  fadeInHorizontal,
  navLinksHidden,
  btnClasses,
};
