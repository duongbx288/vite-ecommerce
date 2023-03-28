import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/vite-ecommerce",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "contacts/:contactsId",
      //   element: <Contact />,
      //   loader: contactLoader,
      // },
      // {
      //   path: "contacts/:contactId/edit",
      //   element: <EditContact />,
      //   loader: contactLoader,
      //   action: editAction,
      // },
    ],
  },
]);

export default router;
