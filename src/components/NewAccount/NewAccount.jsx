import React from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[1000px] mx-auto h-auto border-2">
      <h1 className="font-bold text-3xl my-2">Create an account</h1>
      <form>
        <div className="my-3">
          <label className="fieldset-label font-bold mb-3"> Name</label> <br />
          <input type="text" className="input" placeholder=" Name" />
        </div>
        <div className="my-3">
          <label className="fieldset-label font-bold mb-3">
            Username or Email
          </label>{" "}
          <br />
          <input type="email" className="input" placeholder="Email" />
        </div>
        <div className="my-3">
          <label className="fieldset-label font-bold mb-3">Pasword</label>{" "}
          <br />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <div className="my-3">
          <label className="fieldset-label font-bold mb-3">
            Confirm Password
          </label>{" "}
          <br />
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
          />
        </div>
        <button className="btn btn-secondary">Create an account</button> <br />
        <p className="font-bold">
          Already have an account ?{" "}
          <span className="text-red-500 underline">
            <Link to="/login">
              <button className="btn btn-outline">Login </button>
            </Link>
          </span>
        </p>
      </form>
      <div className="divider"></div>
      <div>
        <button className="btn">Login with Google</button> <br />
        <button className="btn my-3">Login with Facebook</button>
      </div>
    </div>
  );
};

export default NewAccount;
