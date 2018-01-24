import { RubyProPage } from './app.po';

describe('ruby-pro App', function() {
  let page: RubyProPage;

  beforeEach(() => {
    page = new RubyProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
