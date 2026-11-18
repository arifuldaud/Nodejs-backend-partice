import { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";
import { IProduct } from "../types/product";


const productController = (
    req: IncomingMessage,
    res: ServerResponse
) => {
const url =req.url;
const method = req.method;

if(url === "/products" && method ==="GET"){
//    const produts =
// [
//   {
//     "id": 1,
//     "name": "product-1",
//     "price": 20,
//     "category": "Electronics",
//     "stock": 15
//   },
//   {
//     "id": 2,
//     "name": "product-2",
//     "price": 30,
//     "category": "Electronics",
//     "stock": 10
//   },
//   {
//     "id": 3,
//     "name": "Laptop",
//     "price": 750,
//     "category": "Computer",
//     "stock": 8
//   },
//   {
//     "id": 4,
//     "name": "Smartphone",
//     "price": 450,
//     "category": "Mobile",
//     "stock": 20
//   },
//   {
//     "id": 5,
//     "name": "Keyboard",
//     "price": 50,
//     "category": "Accessories",
//     "stock": 25
//   },
//   {
//     "id": 6,
//     "name": "Mouse",
//     "price": 25,
//     "category": "Accessories",
//     "stock": 40
//   },
//   {
//     "id": 7,
//     "name": "Monitor",
//     "price": 200,
//     "category": "Electronics",
//     "stock": 12
//   },
//   {
//     "id": 8,
//     "name": "Headphone",
//     "price": 80,
//     "category": "Accessories",
//     "stock": 18
//   },
//   {
//     "id": 9,
//     "name": "Smart Watch",
//     "price": 120,
//     "category": "Wearable",
//     "stock": 14
//   },
//   {
//     "id": 10,
//     "name": "Tablet",
//     "price": 300,
//     "category": "Electronics",
//     "stock": 9
//   }
// ]

const produts = productService();
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    
    else if(method ==="GET" && id !==null){

const produts = productService();

const product = produts.find((p:IProduct) =>p.id === id);
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Products Received Succesfully",
        data:product,
    }));
    }

    res.end(JSON.stringify({
        message: "Products Received Succesfully",
        data:produt,
    }));



}

};

export default productController;