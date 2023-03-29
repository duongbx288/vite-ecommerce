import { createBrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/mainpage/MainPage";

const Homepage = () => {
  return (
    <div className="">
      <div className="header">Header</div>
      <Outlet />
      <div className="footer">Footer</div>
    </div>
  );
};

const mainRoutes = createBrowserRouter([
  {
    path: "/vite-ecommerce",
    element: <Homepage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "products",
        element: <>Product</>,
      },
      {
        path: "products/:productId",
        element: <>Product Id</>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default mainRoutes;
