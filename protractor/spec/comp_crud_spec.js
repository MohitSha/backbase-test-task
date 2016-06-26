'use strict';
import _ from 'lodash';
import MainPage from '../src/mainPage';

describe('Computers database main page', () => {
  let mainPage;

  beforeEach(() => {
    mainPage = new MainPage();
    mainPage.open();
  });

  it('should allow to create new computers', () => {
    let createComputerPage = mainPage.goCreateComputer();
    expect(createComputerPage.getTitle()).toBe('Add a computer');

    let computerName = `Andrew Test Comp ${_.random(1, 10000)}`;
    createComputerPage.enterName(computerName);
    createComputerPage.enterIntroductionDate('2012-02-03');
    createComputerPage.enterDiscontinuationDate('2012-02-03');
    createComputerPage.selectCompany(_.random(1, 42));
    mainPage = createComputerPage.create();
    const alertMessage = `Done! Computer ${computerName} has been created`;
    expect(mainPage.hasAlert(alertMessage)).toBe(true);

    mainPage.search(computerName);
    expect(mainPage.hasComputerDisplayed(computerName)).toBe(true);
  });

  it('should allow to modify computer details', () => {
    const computerDetails = {name: `Andrew Test Comp ${_.random(1, 10000)}`, company: '3'};
    let createComputerPage = mainPage.goCreateComputer();

    mainPage = createComputerPage.createComputer(computerDetails);
    const alertMessage = `Done! Computer ${computerDetails.name} has been created`;
    expect(mainPage.hasAlert(alertMessage)).toBe(true);

    mainPage.search(computerDetails.name);
    let editComputerPage = mainPage.clickComputer(computerDetails.name);
    expect(editComputerPage.getName()).toBe(computerDetails.name);

    var updatedName = `Andrew Test Updated ${_.random(1, 10000)}`;
    editComputerPage.enterName(updatedName);
    mainPage = editComputerPage.submit();

    const updatedMessage = `Done! Computer ${updatedName} has been updated`;
    expect(mainPage.hasAlert(updatedMessage)).toBe(true);

    mainPage.search(updatedName);
    expect(mainPage.hasComputerDisplayed(updatedName)).toBe(true);
  })

  it('should allow to delete computer', () => {
    const computerDetails = {name: `Andrew Test ${_.random(1, 1000)}`, company: '3'};
    let createComputerPage = mainPage.goCreateComputer();
    mainPage = createComputerPage.createComputer(computerDetails);

    mainPage.search(computerDetails.name);
    let editComputerPage = mainPage.clickComputer(computerDetails.name);

    expect(editComputerPage.getName()).toBe(computerDetails.name);
    mainPage = editComputerPage.deleteComputer();

    const deleteAlert = 'Done! Computer has been deleted'
    expect(mainPage.hasAlert(deleteAlert)).toBe(true);

    mainPage.search(computerDetails.name);
    expect(mainPage.hasNothingFound()).toBe(true);
  })
});