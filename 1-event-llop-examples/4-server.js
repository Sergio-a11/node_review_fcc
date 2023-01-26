const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('No more modifies into the server');
});

server.listen(5000, () => {
  console.log('Sever listening on port : 5000...');
});

// listen function is an async function are still alive while the server is working
// create server funct is alive when a server request is created in sync mode
// so the the listen funct still alive while we're execute other code like creation server fucntion is requested
