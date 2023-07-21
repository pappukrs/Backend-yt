const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type": "text/html"});
    if(req.url=="/"){
        res.end("<h1>HOME PAGE</h1>")
    }
    else if(req.url=='/data'){
        const data= fs.readFile('./data.json',"utf-8",(err, data)=>{
            if(err){
                res.writeHead(500,{"Content-Type": "text/plain"});
                res.end("Server Error: " + err);
            }
            else{
                res.writeHead(200,{"Content-Type": "application/json"});
                res.end(data);
            }
         })
    }
    else{
        res.writeHead(404,{"Content-Type": "text/html"});
        res.end("<h1>404 PAGE NOT FOUND</h1>")
    }
});

server.listen(3000,() => {
console.log("Server is listening on port 3000");
})