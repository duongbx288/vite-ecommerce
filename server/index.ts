import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import route from './routes/index';
dotenv.config();

const app: Application = express();
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

const port = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route init
route(app);

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on http://localhost:${port}`);
  });
} catch (error) {
  let errorMessage = "Failed";
  if (error instanceof Error) {
    errorMessage = `Error occured: ${error.message}`;
  }
  console.log(errorMessage);
}
