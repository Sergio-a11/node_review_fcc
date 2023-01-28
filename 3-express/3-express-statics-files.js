const express = require('express');
const path = require('path');
const app = express();

//define static resources folder
app.use(express.static('./public'));

//if index file is static should be in public folder
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './test/index.html'));
// });

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
