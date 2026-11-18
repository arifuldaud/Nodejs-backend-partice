import { IncomingMessage, ServerResponse } from "http";
import productController from "../controllers/product.controllers";

const routeHandler = (req:IncomingMessage,res:ServerResponse ) =>{
const url = req.url
 const method =req.method

 const urlParams = url?.split("/")
//console.log(urlParams)

const id = urlParams && urlParams[1] === "products" ? Number(urlParams[2]) :null ;
console.log(id)
 //Get all Products
if(url=== "/" && method === "GET" ) {
 //console.log("This is a route Route");
res.writeHead(200,{"Content-Type":"application/json"});  ///text/palin
res.end(JSON.stringify({ message: "This is Route Route"}));
} 
else if (url?.startsWith("/products")) {
    productController(req,res);
}
else  {
// console.log("This is a no defined");
res.writeHead(404,{"Content-Type":"application/json"});
res.end(JSON.stringify({ message: "This is Route Not Found"}));
}
}

export default routeHandler;