export default class HomePage {
  getHomePage = () => cy.get('main#home-page');

  getBannerImage = () => cy.get('img#home-banner');

  getSeeGalleryButton = () => cy.get('button#see-latest');
}
