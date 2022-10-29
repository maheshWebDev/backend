const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1>Hello from my node!</h1></body></html>')
        res.end();
    }

    if(req.url === '/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1>Welcome home</h1></body></html>')
        res.end();
    }
 
    if(req.url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1> Welcome to About Us page</h1></body></html>')
        res.end();
    }

    if(req.url === '/node,'){
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1> Welcome to my Node Js project</h1></body></html>')
        res.end();
    }

})

server.listen(4000);