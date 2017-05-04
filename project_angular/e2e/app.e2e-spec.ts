import { Store2Page } from './app.po';

describe('store2 App', () => {
  let page: Store2Page;

  beforeEach(() => {
    page = new Store2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
