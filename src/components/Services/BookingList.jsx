import { Link } from "react-router-dom";
import CardImg1 from "../../assets/assets/icons/Group 1373.png";
import CardImg2 from "../../assets/assets/icons/Group 1374.png";

const BookingList = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center underline">
        Service List
      </h2>
      <div className="min-h-screen flex">
        <div className="w-1/4 bg-gray-100 p-6">
          <h1 className="text-xl font-bold mb-8">Jerin's Parlour</h1>
          <ul>
            <Link to="/book">
              <li className="mb-4 font-medium text-gray-500"> 📖 Book</li>
            </Link>
            <Link to="/booking-list">
              <li className="mb-4 text-pink-500"> 📋 Booking List</li>
            </Link>
            <Link to="/review">
              <li className=" text-gray-500"> 💬 Review</li>
            </Link>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-10 bg-blue-50">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">Service</h2>
            <p className="text-gray-600"> Abdullah all Mojahid</p>
          </div>
          {/*All Card Div */}
          <div className="flex justify-around items-center">
            {/* Single Card */}
            <div className="border-2 w-5/12 p-4 rounded-lg bg-slate-300">
              <div className="flex justify-between my-4">
                <img className="w-24 h-24" src={CardImg1} alt="" />
                <button className="btn btn-accent">Pending</button>
              </div>
              <h3 className="text-2xl font-bold my-2">
                Anti Age Face Treatment
              </h3>
              <p className="text-gray-500 my-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            {/*  */}
            <div className="border-2 w-5/12 p-4 rounded-lg bg-slate-300">
              <div className="flex justify-between my-4">
                <img className="w-24 h-24" src={CardImg2} alt="" />
                <button className="btn btn-success">Done</button>
              </div>
              <h3 className="text-2xl font-bold my-2">Skin Care Treatment</h3>
              <p className="text-gray-500 my-4">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
