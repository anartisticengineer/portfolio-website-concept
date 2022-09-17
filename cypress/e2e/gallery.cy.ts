import Gallery from '../support/PageObjects/Gallery';

describe('Gallery Page', () => {
  const galleryPage = new Gallery();
  before(() => {
    cy.visit('/gallery');
  });

  it('should contain gallery items', () => {
    galleryPage.getAllGalleryCards().should('be.visible');
  });
});
