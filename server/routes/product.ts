import express, { NextFunction, Request, Response } from "express";
import productController from "../controller/ProductController";

const productRouter = express.Router();
productRouter.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Time:', Date.now());
    next();
});

productRouter.get('/:id', productController.detail);
productRouter.get('/', productController.index);


export default productRouter;