import { CliIgniteUiPage } from './app.po';

describe('cli-ignite-ui App', function() {
  let page: CliIgniteUiPage;

  beforeEach(() => {
    page = new CliIgniteUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
