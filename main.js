const puppeteer = require('puppeteer')


async(() => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })
    const [page] = await browser.pages()
    await page.goto('https://google.com')
})