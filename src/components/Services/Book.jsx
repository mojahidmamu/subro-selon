import { useState } from "react";
import { Link } from "react-router-dom";

const Book = () => {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center underline">
        Book Your Service
      </h2>
      <div className="min-h-screen flex">
        <div className="w-1/4 bg-gray-100 p-6">
          <h1 className="text-xl font-bold mb-8">Jerin's Parlour</h1>
          <ul>
            <li className="mb-4 font-medium text-pink-500">Book</li>
            <Link to="/booking-list">
              <li className="mb-4 text-gray-500">Booking List</li>
            </Link>
            <Link to='/review'>
              <li className="text-gray-500">Review</li>
            </Link>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-10 bg-blue-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Book</h2>
            <p className="text-gray-600"> Abdullah all Mojahid</p>
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Service Name"
            className="w-full mb-6 p-3 border rounded"
          />

          <h3 className="text-lg font-medium mb-4">Pay with</h3>
          <div className="flex gap-4 mb-6">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={() => setPaymentMethod("creditCard")}
              />
              <span className="ml-2">Credit Card</span>
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              <span className="ml-2">Paypal</span>
            </label>
          </div>

          <input
            type="text"
            placeholder="Card Number"
            className="w-full mb-4 p-3 border rounded"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 p-3 border rounded"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-1/2 p-3 border rounded"
            />
          </div>

          <p className="my-6 text-gray-600">
            Your service charge will be <span className="font-bold">$1000</span>
          </p>

          <button className="bg-pink-500 text-white px-8 py-2 rounded">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
