const myserver=require("http");

const server=myserver.createServer((req,res)=>{
  res.write("server is running");
  res.end();
})

server.listen(7088,()=>{
    console.log("running");
});