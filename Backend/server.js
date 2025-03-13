const http = require('http');
const { parse } = require('querystring');
const hostname = '192.168.1.134';
const port = 3306;

const server = http.createServer((req, res) => {
  // Handle the GET request for "Hello, World!"
  res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins (for development)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  // Allow specific methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  // Allow content-type header

  if (req.method === 'OPTIONS') {
    res.writeHead(204);  // No Content for OPTIONS request
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/usrData') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const parsedData = JSON.parse(body);
        console.log('Received data:', parsedData);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          message: 'Data received successfully',
          data: parsedData,
        }));
      } catch (err) {
        console.error('Error parsing JSON:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON data' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});