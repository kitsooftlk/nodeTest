/* Hello World! program in Node.js */
/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  res.end('<title> Hello World\n </title>');
});
 
server.listen(port);
console.log("END");*/

var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 31000;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
