
import { IncomingMessage, ServerResponse } from "http";
import { createProduct, productService } from "../service/product.service";
import { IProduct } from "../types/product";
import { bodyParser } from "../utlis/bodyParser";

const productController = async (
    req: IncomingMessage,
    res: ServerResponse
) => {

    const url = req.url;
    const method = req.method;

    const urlParams = url?.split("/");

    const id =
        urlParams && urlParams[1] === "products" && urlParams[2]
            ? Number(urlParams[2])
            : null;


    // GET All Products
    if (method === "GET" && url === "/products") {

        const products = productService();

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Products Received Successfully",
            data: products,
        }));

    }

    // GET Single Product
    else if (method === "GET" && id !== null) {

        const products = productService();

        const product = products.find(
            (p: IProduct) => p.id === id
        );

        res.writeHead(product ? 200 : 404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: product
                ? "Product Received Successfully"
                : "Product Not Found",
            data: product ?? null,
        }));

    }

    // POST New Product
    else if (method === "POST" && url === "/products") {

        const body = await bodyParser(req);
         
      const newProduct = {
    id: Date.now(),
    ...body
};
       const products = productService();
     products.push(newProduct);
      //  console.log(newProduct);
     createProduct(products);

        res.writeHead(201, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Product Created Successfully",
            data: newProduct,
        }));

    }

    // Route Not Found
    else {

        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            message: "Route Not Found"
        }));

    }
};

export default productController;
