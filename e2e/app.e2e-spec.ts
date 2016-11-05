import { Angular2TestPage } from './app.po';

describe('angular2-test App', function() {
  let page: Angular2TestPage;

  beforeEach(() => {
    page = new Angular2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
