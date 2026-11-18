import { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

const productController = (
    req: IncomingMessage,
    res: ServerResponse
) => {
const url =req.url;
const method = req.method;

if(url === "/products" && method ==="GET"){
   const produts =[{
     id:1,
     name: "product-1",
     price: 20,
   },
{
     id:2,
     name: "product-2",
     price: 30,
   }
]

productService();
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: "Product Received Succesfully",
        data:produts,
    }));


}

};

export default productController;