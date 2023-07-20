import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../pages/Dashboard/Home/DashboardHome";
import AllProducts from "../pages/Dashboard/Products/AllProducts";
import AddNewProduct from "../pages/Dashboard/Products/AddNewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/sign-in",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      // <PrivateRoute>
      <DashboardLayout></DashboardLayout>
      // </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "all-products",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "add-new-product",
        element: <AddNewProduct></AddNewProduct>,
      },
    ],
  },
]);

export default router;
