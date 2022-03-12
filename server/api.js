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

app.get('/product/search', (request, response) => {
  response.send({'ack': false});
});

app.get('/product/:id', (request, response) => {

  pages = [
    'https://www.loom.fr/collections/hauts-homme',
    'https://www.loom.fr/collections/bas-homme'
  ];

  const loomOnly = await db.find({'brand': 'loom'});
  response.send({'ack': false});
});

app.listen(PORT);

console.log(`📡 Running on port ${PORT}`);

