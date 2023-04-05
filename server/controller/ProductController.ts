import { Request, Response } from "express";
import Product from "../model/Product";

class ProductController {

    // [GET] /product/
    index = (req: Request, res: Response) => {
        Product.find({}).lean().then((product) => {
            res.send(product);
        })
        // res.send('PRODUCT MAINPAGE');
    }

    // [GET] /product/:id (why :slug ?)
    detail = (req: Request, res: Response) => {
        res.send(`Product detail: ${req.params.id}`);
    }
}

const productController = new ProductController();
export default productController;
