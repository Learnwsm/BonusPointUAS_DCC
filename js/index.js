const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1 style="color: teal;">nodejs - Hello World!</h1>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
