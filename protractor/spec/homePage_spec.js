'use strict';
import MainPage from '../src/mainPage';

describe('Computers database main page', () => {

  it('should show main page by default', () => {
    let mainPage = new MainPage();
    mainPage.open();
    expect(mainPage.getTitle()).toEqual('Play sample application — Computer database');
    expect(mainPage.computersTable.isDisplayed()).toBeTruthy();
    expect(mainPage.hasDisabledPreviousButton()).toBe(true);
    expect(mainPage.canGoNextPage()).toBe(true);
  });

});
