const dedicatedbrand = require('./sites/dedicatedbrand');
const loom = require('./sites/loom');
const db = require('./db');

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');


const PORT = 8092;

const app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(cors());
app.use(helmet());

app.options('*', cors());

app.get('/', (request, response) => {
  response.send({'ack': true});
});


app.get('/products/search', (request, response) => 
{
  let limit = request.query.limit;
  let brand = request.query.brand;
  let price = request.query.price;
  
  db.aggregate(
    [
      {'$match': { '$and': [ {'brand': brand}, {'price': {'$lte':parseInt(price)}}]}},
      {'$sort': {'price': 1}},
      {'$limit': parseInt(limit)}
    ]
  ).then(elmt => response.send(
    {'limit': limit, 
     'found':elmt.length, 
     'results':elmt
  }));
  
});
// To test : http://localhost:8092/products/search?limit=5&brand=loom&price=50



// http://localhost:8092/products/search?limit=5&brand=dedicated&price=29

app.get('/products/:id', (request, response) => 
{
  db.getDB();
  let url = request.url;
  let elements = url.split('/');
  let id = elements[elements.length - 1];
  db.find({'_id': id}).then(elmt => response.send(elmt[0]));
});

// To test : http://localhost:8092/products/89f2dc10-a334-5e29-a5f5-3773d819c195

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

