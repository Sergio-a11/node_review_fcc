const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./3-express/test/index.html');
const homeStyles = readFileSync('./3-express/test/style.css');
const homeLogo = readFileSync('./3-express/test/logo.svg');
const homeLogic = readFileSync('./3-express/test/browser-app.js');

const server = http.createServer((req, res) => {
  console.log(req.method); //request method
  console.log(req.url); // url of the resquest diff to the URI
  const url = req.url;
  if (url === '/') {
    //home page
    res.writeHead(200, { 'content-type': 'text/html' });
    //   console.log('user hit the server');
    res.write(homePage); //write in the body of response
    res.end();
  } else if (url === '/about') {
    //about page
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About page</h1>'); //write in the body of response
    res.end();
  }
  //responding with other types of resources
  else if (url === '/style.css') {
    //styles page
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles); //write in the body of response
    res.end();
  } else if (url === '/logo.svg') {
    //styles page
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeLogo); //write in the body of response
    res.end();
  } else if (url === '/browser-app.js') {
    //styles page
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic); //write in the body of response
    res.end();
  } else {
    //404
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>page not found</h1>'); //write in the body of response
    res.end();
  }

  //create a header with status code and the MIME type of content to return
});

server.listen(5000);
