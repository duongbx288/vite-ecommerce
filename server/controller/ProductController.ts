import { Request, Response } from "express";

class ProductController {

    // [GET] /product/
    index = (req: Request, res: Response) => {
        res.send('PRODUCT MAINPAGE');
    }

    // [GET] /product/:id (why :slug ?)
    detail = (req: Request, res: Response) => {
        res.send(`Product detail: ${req.params.id}`);
    }
}

const productController = new ProductController();
export default productController;
