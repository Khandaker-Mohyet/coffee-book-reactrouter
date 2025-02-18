
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from "../Components/CoffeeCard";
import CoffeeDetails from "../Pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../categories.json'),
        children: [
          {
            path: '/',
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch('../coffees.json'),
          },
          {
            path: '/category/:category',
            element: <CoffeeCard></CoffeeCard>,
            loader: () => fetch('../coffees.json'),
          },
          
        ]
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
        loader: () => fetch('../coffees.json'),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch('../coffees.json'),
      },
    ]
  },
]);

export default router