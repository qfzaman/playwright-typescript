import { expect, test } from "@playwright/test";


test("handling alerts", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text);;
        await alert.accept("fahmid");
    })
    await page.locator("button:has-text('Click Me')").nth(2).click();
    expect(page.locator("id=prompt-demo")).toContainText("'fahmid'");

})

test("Modal alert", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})