/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { expect } from 'chai';
import utils from '../src/scripts/utilities';

describe('navLinksHidden', () => {
  it('should be hidden', () => {
    expect(utils.navLinksHidden(true)).to.equal('navbar__links--hidden');
  });

  it('should be exposed', () => {
    expect(utils.navLinksHidden(false)).to.equal('navbar__links');
  });
});

describe('button class functionality', () => {
  it('should just be btn', () => {
    expect(utils.btnClasses()).to.equal('btn');
  });

  it('should still be just btn', () => {
    expect(utils.btnClasses('')).to.equal('btn');
  });

  it('should be btn plus one other class', () => {
    expect(utils.btnClasses('class1')).to.equal('btn class1');
  });

  it('should be btn plus a few other classes', () => {
    expect(utils.btnClasses(['class1', 'class2'])).to.equal('btn class1 class2');
  });
});

describe('should be 2020-2021', () => {
  expect(utils.footerCopyrights()).to.equal('© Justin Johnson 2020 - 2021');
});

describe('allowing submission of a form', () => {
  const options: object[] = [{ name: 'Justin', email: 'sample@gmail.com', message: 'bla bla' }, { name: '', email: '', message: '' }];
  it('should be true', () => {
    expect(utils.allowSubmission(options[0])).to.eq(true);
  });
  it('should be false', () => {
    expect(utils.allowSubmission(options[1])).to.eq(false);
  });
});

describe('should display correct urls', () => {

});
