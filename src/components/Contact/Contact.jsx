// import ContactImage from "../../../assets/contact/banner.jpg";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-around space-x-4 p-4 bg-gray-100">
        {/* Phone Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <div className="bg-yellow-500 p-4 text-center text-white font-bold">
            <i className="fas fa-phone-alt"></i>
            <p>PHONE</p>
          </div>
          <div className="p-4 text-center">
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        {/* Address Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <div className="bg-yellow-500 p-4 text-center text-white font-bold">
            <i className="fas fa-map-marker-alt"></i>
            <p>ADDRESS</p>
          </div>
          <div className="p-4 text-center">
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        {/* Working Hours Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border">
          <div className="bg-yellow-500 p-4 text-center text-white font-bold">
            <i className="fas fa-clock"></i>
            <p>WORKING HOURS</p>
          </div>
          <div className="p-4 text-center">
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
      <form>
        <div className="px-28">
          <div className=" ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              placeholder="Enter Your Phone Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-10">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input
              type=""
              placeholder="Write your message hare"
              className="input input-bordered"
              required
            />
            <label>
              <input type="checkbox" /> I'm not a robot
            </label>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-center items-center  mb-5">
        <button className="btn btn-secondary ">Make a call </button> <br />
        <p>If you click the button |^| - <span className="font-bold text-red-600">Explosion the Computer.... </span>So, be careful. </p>
      </div>
    </div>
  );
};

export default Contact;
