const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });
    console.log(req.method);
    res.end('hello');
}).listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
})