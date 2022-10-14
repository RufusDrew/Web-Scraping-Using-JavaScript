const puppeteer = require('puppeteer');
 
async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="landingImage"]');
    const src = await el.getProperty('src');
    const img = await src.jsonValue();

    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = await el2.getProperty('textContent');
    const title = await txt.jsonValue();

    const [el3] = await page.$x('//*[@id="corePriceDisplay_desktop_feature_div"]/div[1]/span[2]/span[2]/span[2]');
    const txt2 = await el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({img, title, price});

    browser.close();

}

scrapeProduct('https://www.amazon.in/AL-FASCINO-Brown-Leather-Wallet/dp/B07HM25QPG/ref=sr_1_1?adgrpid=61730745039&ext_vrnc=hi&gclid=CjwKCAjw7p6aBhBiEiwA83fGujZJdfaun43mEPdx2NlHUA3f7LpCzqqNOXoxuF2TDxh_9X_yM1GqixoCuqcQAvD_BwE&hvadid=590712366452&hvdev=c&hvlocphy=1007749&hvnetw=g&hvqmt=b&hvrand=15900996788582222037&hvtargid=kwd-299077552059&hydadcr=26420_2636094&keywords=amozon+in&qid=1665725792&qu=eyJxc2MiOiI0LjUzIiwicXNhIjoiMi44MSIsInFzcCI6IjAuMDAifQ%3D%3D&sr=8-1');


