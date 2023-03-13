describe('Scroll Home Page Functionality', () => {
  it('can find lede article', async () => {
    var textButton = await $(`~Allow`); // allow notifications
    await textButton.waitForDisplayed({ timeout: 30000 });
    await textButton.click();

    textButton = await $(`~Allow`); // allow tracking
    await textButton.waitForDisplayed({ timeout: 30000 });
    await textButton.click();

    var closeButton = await $(`~Close. Button.`); // close button on subscription screen
    await closeButton.waitForDisplayed({ timeout: 30000 });
    await closeButton.click()

    await $(`~newsfeed-container`); // verify news feed is on home screen
    await $(`~indexstrip-container`); // close button on subscription screen
});
