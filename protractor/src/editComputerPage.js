import CreateCompPage from './createComputerPage';
import MainPage from './mainPage';

export default class EditCompPage extends CreateCompPage {
  constructor() {
    super();
    this.deleteButton = element(by.css('.btn.danger'));
  }

  getName() {
    return this.nameField.getAttribute('value');
  }

  submit() {
    this.createButton.click();
    return new MainPage();
  }

  deleteComputer() {
    this.deleteButton.click();
    return new MainPage();
  }
}