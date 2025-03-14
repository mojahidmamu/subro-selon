import { NavLink } from "react-router-dom";
import sideImg1 from "../../assets/assets/icons/Group 1360.png";
import sideImg2 from "../../assets/assets/icons/Group 1368.png";
import sideImg3 from "../../assets/assets/icons/Group.png";
import UploadImageLogo from "../../assets/assets/icons/cloud-upload-outline 1.png";

const AddService = () => {
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
            <h2 className="text-2xl font-semibold">Add service</h2>
            <p className="text-gray-600">Halimatus Sadia binta Yosuf</p>
          </div>
          {/* Input field */}
          <div className="flex flex-row gap-4">
            <div>
              <label className="fieldset-label">Service Title </label>
              <input
                type="text"
                placeholder="Enter title"
                className="w-full mb-4 p-3 border rounded"
              />
              {/* Description */}
              <label className="fieldset-label">Description</label>
              <textarea
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Description here..."
                rows="4"
              ></textarea>
              <button className="btn btn-secondary mt-5 ">Submit</button>
              {/* Upload Image DIV */}
            </div>
            <div>
              <label className="fieldset-label">Image </label>
              {/* Upload Image Button */}
              <div className="flex justify-center items-center gap-3 border-2 rounded-lg p-3">
                <p className="text-center">Upload Image </p>
                <img className="w-14 h-14" src={UploadImageLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
       
      </div>
      
    </div>
  );
};

export default AddService;
