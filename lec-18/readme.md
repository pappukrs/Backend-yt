





























const http=require('http');
const fs=require('fs');
const dns=require('dns');
const http=require('http');
const fs=require('fs');
const dns=require('dns');
const server=http.createServer((req, res) => {
    if(req.url=='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("<h1>Welcome to the Inventory Management System.</h1>")
    }
    else if(req.url=="/writeinfile"){
        fs.writeFile("inventory.txt","Items in inventory",(err)=>{
            if(err){
                res.writeHead(500);
                res.end("Server Error:"+err)
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end("<h1>Data has been written in the file</h1>")
            }
        })
    }
    else if(req.url=="/additems"){
        const arr=["Item1", "Item2", "Item3", "Item4", "Item5"];
        const data = arr.join('\n');
        fs.appendFile("inventory.txt",'\n'+data,(err)=>{
            if(err){
                res.writeHead(500);
              res.end("Server   Error:"+err);
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'})
                res.end("<h1>All items added to the inventory</h1>")
            }
        })
    }
    else if(req.url=='/alldetails'){
        fs.readFile('inventory.txt',"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Server Error:"+err);
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/plain'})
                res.end(data);
            }
        })
    }
    else if(req.url=="/address"){
      const ipaddress=process.argv[2];

      dns.lookup(ipaddress,(err,address,family)=>{
        if(err){
          res.writeHead(500);
          res.end("Server Error:"+err)
        }
        else{
            res.end(`<h1>The IP Address is ${address}</h1>`)
        }
      })
    }
    else if(req.url=="/delete"){
        fs.unlink("inventory.txt",(err)=>{
            if(err){
                res.writeHead(500);
                res.end("Server Error");
            }
            else{
                res.writeHead(200);
                res.end("<h1>File has been deleted.</h1>");
            }
            })
            
    }
});

server.listen(5000,()=>{
    console.log("Server is running on Port 5000");
})
const server=http.createServer((req, res) => {
    if(req.url=='/'){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end("<h1>Welcome to the Inventory Management System.</h1>")
    }
    else if(req.url=="/writeinfile"){
        fs.writeFile("inventory.txt","Items in inventory",(err)=>{
            if(err){
                res.writeHead(500);
                res.end("Server Error:"+err)
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end("<h1>Data has been written in the file</h1>")
            }
        })
    }
    else if(req.url=="/additems"){
        const arr=["Item1", "Item2", "Item3", "Item4", "Item5"];
        const data = arr.join('\n');
        fs.appendFile("inventory.txt",'\n'+data,(err)=>{
            if(err){
                res.writeHead(500);
              res.end("Server   Error:"+err);
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/html'})
                res.end("<h1>All items added to the inventory</h1>")
            }
        })
    }
    else if(req.url=='/alldetails'){
        fs.readFile('inventory.txt',"utf-8",(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Server Error:"+err);
            }
            else{
                res.writeHead(200,{'Content-Type': 'text/plain'})
                res.end(data);
            }
        })
    }
    else if(req.url=="/address"){
      const ipaddress=process.argv[2];

      dns.lookup(ipaddress,(err,address,family)=>{
        if(err){
          res.writeHead(500);
          res.end("Server Error:"+err)
        }
        else{
            res.end(`<h1>The IP Address is ${address}</h1>`)
        }
      })
    }
    else if(req.url=="/delete"){
        fs.unlink("inventory.txt",(err)=>{
            if(err){
                res.writeHead(500);
                res.end("Server Error");
            }
            else{
                res.writeHead(200);
                res.end("<h1>File has been deleted.</h1>");
            }
            })
            
    }
});

server.listen(5000,()=>{
    console.log("Server is running on Port 5000");
})