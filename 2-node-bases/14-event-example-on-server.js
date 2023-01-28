const http = require('http');

//Event emitter API
const server = http.createServer((req, res) => {
  server.on('request', (req, res) => {
    res.end('Welcome');
  });
});
//the server use Event emmiter method from behind to listen changes

server.listen(5000);
