const myserver=require("http");

const server=myserver.createServer((req,res)=>{
  if(req.url==='/'){
    res.write('this is home page');
    res.end()
  }else  if(req.url==='/about'){
    res.write(`<h1>about<h1>`);
    res.end()
  }
})

server.listen(7088,()=>{
    console.log("running");
});