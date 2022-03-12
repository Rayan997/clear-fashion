/* eslint-disable no-console, no-process-exit */
const loom = require('./sources/loom');
const fs = require('fs');

var products=[];
async function sandbox (eshop = 'https://www.loom.fr/collections/tous-les-vetements') {
  try {
    console.log(`🕵️‍♀️  browsing ${eshop} source`);

    products = await loom.scrape(eshop);

    console.log(products);
    console.log('done');
    const data = JSON.stringify(products, null, 2);
    fs.writeFileSync('products_for_loom.json', data);
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

const [,, eshop] = process.argv;

sandbox(eshop);