const slugify = (title: string): string =>
  title.trim().split(' ').join('-').toLowerCase();

const encode = (data: FormData | any): string =>
  // eslint-disable-next-line implicit-arrow-linebreak
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

export default { slugify, encode };
