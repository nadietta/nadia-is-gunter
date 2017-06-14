import { NadiaIsGunterPage } from './app.po';

describe('nadia-is-gunter App', () => {
  let page: NadiaIsGunterPage;

  beforeEach(() => {
    page = new NadiaIsGunterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
