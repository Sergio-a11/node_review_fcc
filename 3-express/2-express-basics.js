const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

//Any method and any undefined route arrive to this response
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000, () => {
  console.log('server is listening');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
