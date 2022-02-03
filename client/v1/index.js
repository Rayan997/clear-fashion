// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}];

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

 const {marketplace} = require('./data.js');

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable


//const MY_FAVORITE_BRANDS_LINK = MY_FAVORITE_BRANDS;
//console.log(MY_FAVORITE_BRANDS[0]);



/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable

const Number_product = marketplace.length
console.log(marketplace.length)

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have

var brands_name = [];
marketplace.forEach(element => brands_name.push(element['brand']));
brands_name = [...new Set(brands_name)];
console.log(brands_name);
console.log(brands_name.length);


// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable

let marketplace_Sorted = marketplace.filter(() => true);
marketplace_Sorted = marketplace_Sorted.sort(function(first, second) {
  return first.price - second.price;
});
console.log(marketplace_Sorted);
console.log(marketplace_Sorted[0]);

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable

let marketplace_Sorted_Date = marketplace.filter(() => true);
marketplace_Sorted_Date =  marketplace_Sorted_Date.sort(function(a, b) {
  if (a.date.slice(0,4) < b.date.slice(0,4)) {
    return 1;
  }
  if (a.date.slice(0,4) > b.date.slice(0,4)) {
    return -1;
  }
  if (a.date.slice(5,7) > b.date.slice(5,7)) {
    return -1;
  }                                
  if (a.date.slice(5,7) < b.date.slice(5,7)) {
    return 1;
  }                                                                                               
  if (a.date.slice(9,11) > b.date.slice(9,11)) {
    return -1;
  }                                                                    
  if (a.date.slice(9,11) < b.date.slice(9,11)) {
    return 1;
  }
   // names must be equal
   return 0;
});

console.log(marketplace_Sorted_Date[0].date);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list

const marketplace_price_50_100 = marketplace.filter(marketplace => marketplace.price > 50 && marketplace.price < 100);
console.log(marketplace_price_50_100[0].price);

// 🎯 TODO: Average price
// 1. Determine the average price of the marketplace
// 2. Log the average

var somme=0;
for(var i=0; i<Number_product; i++)
{                                                                      
  somme += marketplace[i].price;
}
var resultat = somme / Number_product; 
console.log(resultat);  


/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
let marketplace_1083 = marketplace.filter(marketplace => marketplace['brand'] == '1083');
let marketplace_dedicated = marketplace.filter(marketplace => marketplace['brand']== 'dedicated');
let marketplace_aatise = marketplace.filter(marketplace => marketplace['brand'] == 'aatise');
let marketplace_loom = marketplace.filter(marketplace => marketplace['brand'] == 'loom');
let marketplace_adresse = marketplace.filter(marketplace => marketplace['brand'] == 'adresse');

const brands = {
  '1083': marketplace_1083,
  'dedicated': marketplace_dedicated,
  'aatise': marketplace_aatise,
  'loom': marketplace_loom,
  'adresse': marketplace_adresse,
};



// 2. Log the variable

console.log(brands);

// 3. Log the number of products by brands

for(var key in brands) {
  console.log(brands[key].length);
}

// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort

const brands_Sorted = {...brands};
for(var key in brands_Sorted) {
  brands_Sorted[key].sort(function(first, second) {
    return second.price - first.price;
  });
}

console.log(brands_Sorted)
console.log(brands_Sorted['1083'][0]['price'])
console.log(brands_Sorted['1083'][1]['price'])
console.log(brands_Sorted['1083'][12]['price'])

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

const brands_Sorted_Date = {...brands};
for(var key in brands_Sorted_Date) {
  brands_Sorted_Date[key].sort(function(a, b) {
    if (a.date.slice(0,4) < b.date.slice(0,4)) {
      return 1;
    }
    if (a.date.slice(0,4) > b.date.slice(0,4)) {
      return -1;
    }
    if (a.date.slice(5,7) > b.date.slice(5,7)) {
      return -1;
    }                                
    if (a.date.slice(5,7) < b.date.slice(5,7)) {
      return 1;
    }                                                                                               
    if (a.date.slice(9,11) > b.date.slice(9,11)) {
      return -1;
    }                                                                    
    if (a.date.slice(9,11) < b.date.slice(9,11)) {
      return 1;
    }
     // names must be equal
     return 0;
  });
}

console.log(brands_Sorted_Date)
console.log(brands_Sorted_Date['1083'][0]['date'])
console.log(brands_Sorted_Date['1083'][1]['date'])
console.log(brands_Sorted_Date['1083'][12]['date'])


/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products

var n = 0;
for(var key in brands_Sorted) {
  n = Math.floor(brands_Sorted[key].length * 9 / 10 ); 
  console.log(brands_Sorted[key][n]['price'])
}


/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.


// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€

var flag = true;
for (var i = 0; i < COTELE_PARIS.length; i++) {
  if (COTELE_PARIS[i]['price'] >= 100) {
    flag = false;
  }
}
console.log(flag)

// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product

for (var i = 0; i < COTELE_PARIS.length; i++) {
  if (COTELE_PARIS[i]['uuid'] == 'b56c6d88-749a-5b4c-b571-e5b5c6483131') {
    console.log(COTELE_PARIS[i]);
  }
}

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;

jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?

console.log(blueJacket);
console.log(jacket);
console.log(blueJacket['favorite']);
console.log(jacket['favorite']);

// We can notice that when we changed jacket, we changed blueJacket as well

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties

jacket = {...blueJacket};
jacket.favorite = true;
console.log(blueJacket['favorite']); // now it is undefined, it means that lueJacket hasn't changed
console.log(jacket['favorite']);


/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
