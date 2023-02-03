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

//url with query params
app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    //good response buy you have to keep the format
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
  // res.send('hello world');
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
