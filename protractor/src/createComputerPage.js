import MainPage from './mainPage';

export default class CreateCompPage {
  constructor() {
    this.nameField = element(by.id('name'));
    this.introducedDate = element(by.id('introduced'));
    this.discontinueddDate = element(by.id('discontinued'));
    this.companyDropDown = element(by.id('company'));
    this.createButton = element(by.css('.btn.primary'));
    this.cancelButton = element(by.css('.btn[href=\'/computers\']'));
    this.title = element(by.css('#main>h1'))
  }

  getTitle() {
    return this.title.getText();
  }

  enterName(name) {
    this.nameField.clear();
    this.nameField.sendKeys(name);
  }

  enterIntroductionDate(date) {
    this.introducedDate.sendKeys(date);
  }

  enterDiscontinuationDate(date) {
    this.discontinueddDate.sendKeys(date);
  }

  selectCompany(companyName) {
    this.companyDropDown.$(`[value='${companyName}']`).click();
  }

  create() {
    this.createButton.click();
    return new MainPage();
  }

  createComputer(params) {
    if (params.name) {
      this.enterName(params.name);
    }
    if (params.introducedDate) {
      this.enterIntroductionDate(params.introducedDate);
    }
    if (params.discontinueddDate) {
      this.enterDiscontinuationDate(params.discontinueddDate);
    }
    if (params.companyName) {
      this.selectCompany(params.companyName)
    }
    return this.create();
  }


}

