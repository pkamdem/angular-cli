export class <%= jsComponentName %>Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('<%= prefix %>-root h1')).getText();
  }
}
