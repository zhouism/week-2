const http = require('http');

http.createServer((request, response) => {
    request.on('error', (err) => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', (err) => {
        console.error(err);
    })
    if (request.method === 'POST' && request.url === '/echo') {
        request.pipe(response);
    //     let body = [];
    // request.on('data', (chunk) => {
    //     body.push(chunk);
    // }).on('end', () => {
    //     body = Buffer.concat(body).toString();
    //     response.end(body);
    // });
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8080);