const puppeteer = require ("puppeteer");
const fs= require ("fs");

const portatilesArray = [];
const scrapper = async (url) => {
console.log(url);
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({width:1080, height:1024});
    repeat(page);
};

const repeat = async(page) => {
    const arrayDivs = await page.$$(".product-card");
        for (const prodDiv of arrayDivs) {
            let title = await prodDiv.$eval(".product-card__title", (el)=> el.textContent);
                        // selecciono el elemento y lo evaluo al mismo tiempo
            let img = await prodDiv.$eval("img", (el)=> el.src );
            let price;
            try {
                price= await prodDiv.$eval(".product-card__price-container", (el)=> parseFloat(el.textContent.slice(0, el.textContent.length -1)));
            } catch (error) {
                price= 0;
            };

        const portatil = {
            title,
            price,
            img
        }
        portatilesArray.push(portatil); // aca termino de seleccionar loos portatiles de la pagina 
    }

    try {
            //aca tengo que pasar a la siguiente pagina:
        await page.$eval("[aria-label='Página siguiente']", (el)=> el.click());
        await page.waitForNavigation();
        repeat(page);
    } catch (error) {
          write(portatilesArray);
        }
};

const write = (portatilesArray)=> {
    fs.writeFile("portatiles.json", JSON.stringify(portatilesArray), ()=> {
        console.log("Archivo ya completado");
    });
};

scrapper("https://www.pccomponentes.com/portatiles");