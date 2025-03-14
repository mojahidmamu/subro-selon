import React from "react";
import { Link, NavLink } from "react-router-dom";
import sideImg1 from "../../assets/assets/icons/Group 1360.png";
import sideImg2 from "../../assets/assets/icons/Group 1368.png";
import sideImg3 from "../../assets/assets/icons/Group.png";

const MakeAdmin = () => {
  return (
    <div>
      <div className="min-h-screen flex">
        <div className="w-1/4 bg-gray-100 p-6">
          <h1 className="text-xl font-bold mb-8">Jerin's Parlour</h1>
          <ul>
            <li className="mb-6">
              <NavLink to="/order-list" className="underline ">
                <div className="flex flex-row">
                  <img className="w-8 h-8" src={sideImg1} alt="" />
                  <h5 className="text-xl font-bold ml-5">Order list</h5>
                </div>
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/add-service" className="underline  ">
                <div className="flex flex-row">
                  <img className="w-8 h-8" src={sideImg2} alt="" />
                  {/* <h5 className="font-bold text-xl">+</h5> */}
                  <h5 className="text-xl font-bold ml-5">Add Service</h5>
                </div>
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/make-admin" className="underline ">
                <div className="flex flex-row">
                  <img className="w-8 h-8" src={sideImg3} alt="" />
                  <h5 className="text-xl font-bold ml-5">Make Admin</h5>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-10 bg-blue-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Make Admin</h2>
            <p className="text-gray-600"> Abdullah all Mojahid</p>
          </div>
          <div>
            <label className="fieldset-label mb-4">Email</label> <br />
            <div className="flex mt-3 gap-5"> 
              <input
                type="email"
                className="input w-64"
                placeholder="admin@email.com"
              />
              <button className="btn btn-secondary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
