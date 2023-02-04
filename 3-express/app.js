const express = require('express');
const app = express();
let { people } = require('./data');

//static assets
app.use(express.static('./3-express/example-methods'));

//parse form data to json
app.use(express.urlencoded({ extended: false }));

//the route was define in index.html file
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please Provide credentials');
});

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
