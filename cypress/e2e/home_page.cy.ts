import HomePage from '../support/PageObjects/HomePage';

describe('Home Page', () => {
  const homePage: HomePage = new HomePage();

  const baseUrl: string = 'https://cyberartbyjustin.com';
  const galleryUrl: string = `${baseUrl}/gallery`;

  it('should visit the home page', () => {
    cy.visit('/');
    homePage.getHomePage().should('be.visible');
  });

  it('should contain a banner image', () => {
    homePage.getBannerImage().should('be.visible').and('have.attr', 'alt');
  });

  it('should go to the gallery page', () => {
    homePage.getSeeGalleryButton().should('be.visible').click();
    cy.url().should('eql', galleryUrl);
  });
});
