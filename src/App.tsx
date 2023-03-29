import { useState } from "react";
import { BrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
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
