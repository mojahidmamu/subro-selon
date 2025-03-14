import React from "react";
import { NavLink } from "react-router-dom";
import sideImg1 from "../../assets/assets/icons/Group 1360.png";
import sideImg2 from "../../assets/assets/icons/Group 1368.png";
import sideImg3 from "../../assets/assets/icons/Group.png";

const Admin = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-6 h-screen">
      <h1 className="text-xl font-bold mb-8">Jerin's Parlour</h1>
      <ul>
        <li className="mb-6">
          <NavLink to="/order-list" className="underline text-red-500">
            <div className="flex flex-row">
              <img className="w-8 h-8" src={sideImg1} alt="" />
              <h5 className="text-xl font-bold ml-5">Order list</h5>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
