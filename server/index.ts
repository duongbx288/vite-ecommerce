import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import route from "./routes/index";
import connect from "./config/mongodb";

dotenv.config();
const port = process.env.PORT ?? 8000;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

// Connect database
if (username && password) {
  connect(username, password);
} else {
  connect('normal_user', '1234');
}

const app: Application = express();

// Serve static files such as images, CSS files, JS files, etc.
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route init
route(app);

// Start
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
