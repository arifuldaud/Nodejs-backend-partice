import {createServer, IncomingMessage, ServerResponse} from "http";
import { Server } from "http";
import { json } from "stream/consumers";
import routeHandler from "./routes/route";
const server: Server = createServer((req:IncomingMessage,res:ServerResponse)=> {

routeHandler(req,res)

  //console.log("Request:",req);
 //console.log("response:",res)

//  const url = req.url
//  const method =req.method

// if(url=== "/" && method === "GET" ) {
//  //console.log("This is a route Route");
// res.writeHead(200,{"Content-Type":"application/json"});  ///text/palin
// res.end(JSON.stringify({ message: "This is Route Route"}));
// } 
// else if (url?.startsWith("/products")) {
//     res.writeHead(200, {
//         "Content-Type": "application/json"
//     });

//     res.end(JSON.stringify({
//         message: "This is products Route"
//     }));
// }
// else  {
// // console.log("This is a no defined");
// res.writeHead(404,{"Content-Type":"application/json"});
// res.end(JSON.stringify({ message: "This is Route Not Found"}));
// }
 
}) ;
server.listen(5000,()=>{
    console.log("Server is Running Succesfully");
});
  

