import { ResidenciasPage } from './app.po';

describe('residencias App', function() {
  let page: ResidenciasPage;

  beforeEach(() => {
    page = new ResidenciasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
