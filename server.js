const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./public/index.html')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/')
    {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.write(homePage);
        res.end();
    }
})

server.listen(3000, () => {
    console.log("Server is listening on the port 3000");
});