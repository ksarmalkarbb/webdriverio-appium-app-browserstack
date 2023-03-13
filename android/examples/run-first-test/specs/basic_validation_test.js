describe('Scroll Home Page Functionality', () => {
  it('can find lede article', async () => {

    // allow permissions:
    var allowButton = await $('android=new UiSelector().resourceId("com.android.permissioncontroller:id/permission_allow_button")');
    await allowButton.waitForDisplayed({ timeout: 30000 });
    await allowButton.click()
    await browser.pause(5000);

    var closeButton = await $(`~Close. Button.`); // hit close button on subscription screen
    await closeButton.click();

    await browser.pause(5000); // wait for home feed to load.

    await $(`~newsfeed-container`); // verify news feed is on home screen
    await $(`~indexstrip-container`); // verify index strip is on home screen
  });
});
