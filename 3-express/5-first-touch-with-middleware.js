const express = require('express');
const app = express();
const logger = require('./logger');

// req -> middleware -> res

app.use(logger); //all methods below of this gonna invoke the logger middleware
//app.use('/api', logger); //the fisrt param is a filter by the start of the route
// I don't need declare this middleware method for each route

//middleware function, the code gonna execute between request and response
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('items');
});

app.listen(5000, (req, res) => {
  console.log('server is listening on port 5000');
});
