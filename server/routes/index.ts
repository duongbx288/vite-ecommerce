import { Application } from "express";
import productRouter from "./product";

const route = (app: Application) => {
    app.use('/product', productRouter);
    // app.use('/');
}

export default route;