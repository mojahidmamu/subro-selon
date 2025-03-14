import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import NewAccount from "../NewAccount/NewAccount";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Porfolito from "../Portfolio/Portfolio";
import Team from "../Team/Team";
import Book from "../Services/Book";
import BookingList from "../Services/BookingList";
import Review from "../Services/Review";
import Admin from "../Admin/Admin";
import OrderList from "../Order-list/OrderList";

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
      {
        path: '/book',
        element: <Book></Book>
      },
      {
        path: '/booking-list',
        element: <BookingList></BookingList>
      },
      {
        path: '/review',
        element: <Review></Review>
      },
      {
        path: '/admin',
        element: <Admin></Admin>
      },
      {
        path: '/order-list',
        element: <OrderList></OrderList>
      }
    ],
  },
]);

export default router;
