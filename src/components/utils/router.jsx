import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NewAccount from "../NewAccount/NewAccount";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Porfolito from "../Portfolio/Portfolio";
import Team from "../Team/Team";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/account",
        element: <NewAccount></NewAccount>,
      },
      {
        path: "/service",
        element: <Services></Services>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/portfolio",
        element: <Porfolito></Porfolito>,
      },
      {
        path: "/team",
        element: <Team></Team>,
      },
    ],
  },
]);

export default router;
