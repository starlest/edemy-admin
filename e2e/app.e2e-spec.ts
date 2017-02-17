import { EdemyAdminPage } from './app.po';

describe('edemy-admin App', () => {
  let page: EdemyAdminPage;

  beforeEach(() => {
    page = new EdemyAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
