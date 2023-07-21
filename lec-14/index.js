const http=require('http');


const server=http.createServer((req,res)=>{
       console.log(req);
    res.writeHead(200,{"Content-Type":"text/plain"});
    // res.end("Hello World");

    // res.write("Hello World");
    // res.write("Hello KGF");
    // res.end("");
    res.end("Hello World");
})

server.listen(3000,()=>{
    console.log("Server is listening on:3000");
})
