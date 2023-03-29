import { createBrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CartPage from "../pages/cart/CartPage";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/home/MainPage";
import ProductDetail from "../pages/product/ProductDetail";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
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
        path: "product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default mainRoutes;
