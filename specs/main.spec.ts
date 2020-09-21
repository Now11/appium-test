import { MainPage } from '../src';
import { expect } from 'chai';

const mainPage = new MainPage();

describe('suite #1', function () {
  before(async function () {
    await driver.launchApp();
  });

  it('Menu buttons should have right titles', async function () {
    const btnsNames = [
      "Access'ibility",
      'Accessibility',
      'Animation',
      'App',
      'Content',
      'Graphics',
      'Media',
      'NFC',
      'OS',
      'Preference',
      'Text1',
      'Views',
    ];

    const menu = await mainPage.getButtonsTitles();
    menu.forEach((menuItem, i) => {
      expect(menuItem).to.include(btnsNames[i]);
    });
  });
});
