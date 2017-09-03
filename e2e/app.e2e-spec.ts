import { CloserChatPage } from './app.po';

describe('closer-chat App', () => {
  let page: CloserChatPage;

  beforeEach(() => {
    page = new CloserChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
