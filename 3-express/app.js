const express = require('express');
const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

//send back a json file
app.get('/api/products', (req, res) => {
  const baseProductData = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(baseProductData);
});

//send back a json file for specific product
app.get('/api/products/:id', (req, res) => {
  const singleProductData = products.find(
    (product) => product.id === Number(req.params.id)
  );
  //if the product doesn't exists or is undefined
  if (!singleProductData) {
    return res.status(404).send('The specific product does not exist');
  }
  res.json(singleProductData);
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
