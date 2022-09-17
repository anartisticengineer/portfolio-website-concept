export default class Gallery {
  getAllGalleryCards = () => {
    return cy.get('.seriescard');
  };
  getGalleryCardByName = (galleryName: string) => {
    return cy.contains('.seriescard', galleryName);
  };
}
