import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/App.css";
import router from "./routes/MainRoutes";
import { BrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import ErrorPage from "./pages/ErrorPage";
import mainRoutes from "./routes/MainRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <BrowserRouter>
    //   <MainRoutes/>
    // </BrowserRouter>
    <RouterProvider router={mainRoutes}/>
  );
}

export default App;
