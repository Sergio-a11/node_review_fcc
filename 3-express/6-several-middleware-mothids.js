const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// req -> middleware -> res

//using two or more method as middleware
//sort is matter, sort of declaratio, sort of execute
app.use(logger, authorize);

//all methods below of this gonna invoke the logger middleware
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

//use two middleware functions in a specific method
//app.get('/api/items',[logger,authorize],(req,res)=>)
app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(5000, (req, res) => {
  console.log('server is listening on port 5000');
});
