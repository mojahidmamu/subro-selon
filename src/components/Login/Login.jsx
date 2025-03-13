import { Link } from "react-router-dom";
import logo from "../../assets/assets/icons/logo.png";
const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img className="w-28 h-16" src={logo} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold my-5 text-center">Login with </h1>{" "}
        <br />
        <button className="btn btn-outline">Login with Google</button> <br />
        <p className="font-bold">
          Don't have an account ?{" "}
          <span className="text-red-500 underline" >
            <Link to='/account'>
              <button className="btn btn-primary">Create an account</button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
