const allowSubmission = (formData: {}): boolean => {
  const formValues: string[] = Object.values(formData);
  return formValues.every((item) => item !== '');
};

const footerCopyrights = (): string => {
  const date: Date = new Date();
  return `© Justin Johnson 2020${
    date.getFullYear() === 2020 ? '' : ` - ${date.getFullYear()}`
  }`;
};

export default { allowSubmission, footerCopyrights };
