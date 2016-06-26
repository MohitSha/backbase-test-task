import CreateComputerPage from './createComputerPage';
import EditComputerPage from './editComputerPage';

export default class MainPage {
  constructor() {
    this.createComputerButton = element(by.id('add'));
    this.searchBox = element(by.id('searchbox'))
    this.searchComputerButton = element(by.id('searchsubmit'))
    this.computersTable = element(by.css('.computers.zebra-striped'))
    this.title = element(by.css('.fill>a'));
    this.previousButton = element(by.css('li.prev>a'));
    this.pageCount = element(by.css('li.current>a'));
    this.nextButton = element(by.css('li.next>a'))
    this.alertBox = element(by.css('.alert-message.warning'));
    this.emptyResultBox = element(by.css('.well'));
  }

  open() {
    return browser.get(browser.baseUrl);
  }

  getTitle() {
    return this.title.getText();
  }

  getCurrentCount() {
    this.pageCount.getText();
  }

  goNextPage() {
    this.nextButton.click();
  }

  goPreviousPage() {
    this.previousButton.click();
  }

  hasDisabledPreviousButton() {
    return element(by.css('.prev.disabled>a')).isDisplayed();
  }

  hasDisabledNextButton() {
    return element(by.css('.next.disabled>a')).isDisplayed();
  }

  canGoNextPage() {
    return this.nextButton.isEnabled();
  }

  search(computerName) {
    this.searchBox.sendKeys(computerName);
    this.searchComputerButton.click();
  }

  hasComputerDisplayed(computerName) {
    return element.all(by.css('.computers.zebra-striped>tbody>tr>td:first-child>a'))
      .filter((elem, index) => {
        return elem.getText().then((text) => {
          return text === computerName;
        });
      }).count().then((count) => {
        return count > 0;
      });
  }

  goCreateComputer() {
    this.createComputerButton.click();
    return new CreateComputerPage();
  }

  hasAlert(alertMessage) {
    return this.alertBox.getText().then((text) => {
      return text === alertMessage;
    });
  }

  clickComputer(computerName) {
    element(by.linkText(computerName)).click()
    return new EditComputerPage();
  }

  hasNothingFound() {
    browser.sleep(2000);
    return element(by.css('em')).getText().then((text) => {
      return text === 'Nothing to display';
    })
  }
}