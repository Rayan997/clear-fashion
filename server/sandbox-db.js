/* eslint-disable no-console, no-process-exit */
const dedicatedbrand = require('./sites/dedicatedbrand');
const loom = require('./sites/loom');
const db = require('./db');

async function sandbox () {
  try {
    let products = [];
    let pages = [
      'https://www.dedicatedbrand.com/en/men/basics',
      'https://www.dedicatedbrand.com/en/men/sale'
    ];

    console.log(`🕵️‍♀️  browsing ${pages.length} pages with for...of`);
    // 🎯 TODO: Find all products related to a given brands
    // Way 1 with for of: we scrape page by page
    for (let page of pages) {
      console.log(`🕵️‍♀️  scraping ${page}`);

      let results = await dedicatedbrand.scrape(page);

      console.log(`👕 ${results.length} products found`);

      products.push(results);
    }

    pages = [
      'https://www.loom.fr/collections/hauts-homme',
      'https://www.loom.fr/collections/bas-homme'
    ];

    console.log('\n');

    console.log(`🕵️‍♀️  browsing ${pages.length} pages with Promise.all`);

    const promises = pages.map(page => loom.scrape(page));
    const results = await Promise.all(promises);

    console.log(`👕 ${results.length} results of promises found`);
    console.log(`👕 ${results.flat().length} products found`);

    console.log(results);
    console.log(results.flat());

    products.push(results.flat());
    products = products.flat();

    console.log('\n');

    console.log(`👕 ${products.length} total of products found`);

    console.log('\n');

    const result = await db.insert(products);

    console.log(`💽  ${result.insertedCount} inserted products`);

    console.log('\n');

    console.log('💽  Find Loom products only');

    const loomOnly = await db.find({'brand': 'loom'});

    console.log(`👕 ${loomOnly.length} total of products found for Loom`);
    console.log(loomOnly[0]);
    for (const elem of loomOnly) {  
      console.log(elem)
    }

    // 🎯 TODO: Find all products less than a price

    let price = 80;
    console.log('💽  Find all products less than a price, here ' + price);
    const loom_less_price = await db.find({'brand': 'loom', 'price': {"$lt": price}});

    console.log(`👕 ${loom_less_price.length} total of products found for Loom`);
    //console.log(loom_less_price);

    loom_less_price.forEach(product => {
      console.log(product)
    });

    // 🎯 TODO: Find all products sorted by price

    console.log('💽  Find all products sorted by price');
    //const loom_sorted_by_price = await db.find({'brand': 'loom'}).sort( { 'price': -1 } );
    //const loom_sorted_by_price = await db.aggregate( [{ $sort : { 'price' : -1 } }])
    const loom_sorted_by_price = await db.sort({'price': 1});

    console.log(`👕 ${loom_sorted_by_price.length} total of products found for sorted by price`);
    //console.log(loom_less_price);

    //loom_sorted_by_price.forEach(product => {
    //  console.log(product)
    //});

    // Autre méthode: en utilisant aggregate
    console.log('💽  Find all products sorted by price with aggregate');
    const products_sorted_price_2 = await db.aggregate(
      [
        {'$sort':{'price': 1}}
      ]
    );

    console.log(`👕 ${products_sorted_price_2.length} total of products found`);

    products_sorted_price_2.forEach(product => {
      console.log(product)
    });

    db.close();
  } catch (e) {
    console.error(e);
  }
}

sandbox();




