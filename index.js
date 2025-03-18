//https
const http = require("http");
const fs = require("fs");

const PORT = 8000;
const home = fs.readFileSync("./index.html","utf-8");

const server  = http.createServer((req,res,next)=>{
    if(req.url === "/"){
        return res.end(home);
    };
    if(req.url === "/about"){
        return res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>CONTACT PAGE </h1>");
    } else {
        return res.end("<h1>404 page not found</h1>");
    }

});

server.listen(PORT, () => {
    console.log(`server is working on http://127.0.0.1:${PORT})`)
});
