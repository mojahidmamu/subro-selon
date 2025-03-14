import React from "react";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center underline">
        Review...{" "}
      </h2>
      <div className="min-h-screen flex">
        <div className="w-1/4 bg-gray-100 p-6">
          <h1 className="text-xl font-bold mb-8">Jerin's Parlour</h1>
          <ul>
            <Link to="/book">
              <li className="mb-4 font-medium text-gray-500"> 📖 Book</li>
            </Link>
            <Link to="/booking-list">
              <li className="mb-4 text-gray-500"> 📋 Booking List</li>
            </Link>
            <Link to="/review">
              <li className="text-pink-500"> 💬 Review</li>
            </Link>
          </ul>
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-10 bg-blue-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Review</h2>
            <p className="text-gray-600"> Abdullah all Mojahid bin Yosuf</p>
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
  );
};

export default Review;
