const http = require('http');

const server = http.createServer((req, res) => {
    const {url, method} = req;

    if(url === '/'){
        if(method === 'GET') {
            return res.end('GET World');
        } else if (method === 'POST') {
            return res.end('POST World');
        }
    } else if (url === '/test') {
        return res.end('Hello World');
    } else {
        return res.end('Endpoint not found');
    }
 
});

server.listen(3001, 'localhost', () => {
  console.log('Listening on http://localhost:3001');
});


