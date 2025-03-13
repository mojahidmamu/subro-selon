import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NewAccount from "../NewAccount/NewAccount";

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
            children: [
                {
                    path: '/newAcount', 
                    element: <NewAccount></NewAccount>
                }
            ]
        }, 

      ]
    },
  ]);

export default router;