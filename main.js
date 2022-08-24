const puppeteer = require('puppeteer')


async function Start() {
    const elements = {
        search_field: '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input',
        search_submit: '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[5]/center/input[1]'
    }
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    })
    const [page] = await browser.pages()
    let i = 1;
    while (true) {
        await page.goto('https://google.com', {
            waitUntil: 'networkidle2',
            timeout: 0
        })

        await page.waitForXPath(elements.search_field)
        const search_field = await page.$x(elements.search_field)
        await search_field[0].type('Wiji Fiko Teren')
        await page.waitForXPath(elements.search_submit)
        const search_submit = await page.$x(elements.search_submit)
        search_submit.evaluate(e => e.click())
        await Promise.resolve(() => {setTimeout(() => {}, 10000)})
        console.log(i)
        i++
    }
}

Start()