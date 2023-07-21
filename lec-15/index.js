const http=require('http');

const server=http.createServer((req,res) => {
    // res.writeHead(200,{"Content-Type": "text/html"});
    //html  content-type-compulsory hai
    // res.end("<h1>Welcome to CodeServer youtube channel!</h1>");


    const content={
        title: "Welcome to codeserver",
        text:"Please Subscribe it"
    }
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify(content));
})


server.listen(3000,()=>{
    console.log("Server is listening on port:3000")
});