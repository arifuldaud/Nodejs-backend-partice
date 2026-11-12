import {createServer} from "http";
const server = createServer((req,res)=>{
  //console.log("Request:",req);
 console.log("response:",res)
}) ;
server.listen(5000,()=>{
    console.log("Server is Running Succesfully");
});
  

