import React from "react";
import { NavLink } from "react-router-dom";
import sideImg1 from "../../assets/assets/icons/Group 1360.png";
import sideImg2 from "../../assets/assets/icons/Group 1368.png";
import sideImg3 from "../../assets/assets/icons/Group.png";

const MakeAdmin = () => {
  return (
    <div>
      <div className="flex min-h-screen">
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
              <NavLink to="/make-admin" className="underline text-red-500">
                <div className="flex flex-row">
                  <img className="w-8 h-8" src={sideImg3} alt="" />
                  <h5 className="text-xl font-bold ml-5">Make Admin</h5>
                </div>
              </NavLink>
            </li>
          </ul>
          {/* Main Content */}
          <div className="w-3/4 p-10 bg-blue-50">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Review</h2>
              <p className="text-gray-600"> Abdullah all Mojahid</p>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Company’s name, Designation"
              className="w-full mb-4 p-3 border rounded"
            />
            {/* Description */}
            <textarea
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Description here..."
              rows="4"
            ></textarea>
            <button className="btn btn-secondary my-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
