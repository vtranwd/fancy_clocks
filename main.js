const http = require('http');

const clocks = [];

const createClock = (res) => {
  const myTimer = setInterval(function(){ alert("Hello"); }, 1000);
  clocks.push();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'I will create a clock',
  }));
};

const getClock = (res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'getting clocks',
  }));
};

const yellAtClient = (res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'ya cannot!'
  }));
};

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  switch(req.url) {
    case "/createClock":
      createClock(res);
      break;
    case "/getClock":
      getClock(res);
      break;
    default:
      yellAtClient(res);
  }
});

server.listen(8000);

