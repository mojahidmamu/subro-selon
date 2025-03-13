import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NewAccount from "../NewAccount/NewAccount";
import Services from "../Services/Services"; 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>, 
      children: [
        {
            path: '/',
            element: <Home></Home>    
        }, 
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
          path: '/account',
          element: <NewAccount></NewAccount>
        },
        {
          path: '/service',
          element: <Services></Services>,
        },
      ]
    },
  ]);

export default router;