/* eslint-disable no-undef */
import { expect } from 'chai';
import scripts from '../src/scripts';

const { css, url, otherUtils } = scripts;

describe('navLinksHidden', () => {
  it('should be hidden', () => {
    expect(css.navLinksHidden(true)).to.equal('navbar__links--hidden');
  });

  it('should be exposed', () => {
    expect(css.navLinksHidden(false)).to.equal('navbar__links');
  });
});

describe('button class functionality', () => {
  it('should just be btn', () => {
    expect(css.btnClasses()).to.equal('btn');
  });

  it('should still be just btn', () => {
    expect(css.btnClasses('')).to.equal('btn');
  });

  it('should be btn plus one other class', () => {
    expect(css.btnClasses('class1')).to.equal('btn class1');
  });

  it('should be btn plus a few other classes', () => {
    expect(css.btnClasses(['class1', 'class2'])).to.equal('btn class1 class2');
  });
});

describe('slugify', () => {
  expect(url.slugify('Test This String')).to.equal('test-this-string');
});

describe('should be 2020-2022', () => {
  expect(otherUtils.footerCopyrights()).to.equal(
    '© Justin Johnson 2020 - 2022',
  );
});

describe('allowing submission of a form', () => {
  const options: object[] = [
    { name: 'Justin', email: 'sample@gmail.com', message: 'bla bla' },
    { name: '', email: '', message: '' },
  ];
  it('should be true', () => {
    expect(otherUtils.allowSubmission(options[0])).to.eq(true);
  });
  it('should be false', () => {
    expect(otherUtils.allowSubmission(options[1])).to.eq(false);
  });
});

describe('should display correct urls', () => {});
