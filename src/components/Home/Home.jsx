import React from "react";
import CoverImg from "../../assets/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
import cardImg1 from "../../assets/assets/icons/Group 1372.png";
import cardImg2 from "../../assets/assets/icons/Group 1373.png";
import cardImg3 from "../../assets/assets/icons/Group 1374.png";
import cardImg4 from "../../assets/assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png";
import people1 from "../../assets/assets/images/Ellipse 90.png";
import people2 from "../../assets/assets/images/Ellipse 91.png";
import people3 from "../../assets/assets/images/Ellipse 92.png";
import rating from "../../assets/assets/icons/Group 33040.png";

const Home = () => {
  return (
    <div>
      {/* First section */}
      <section>
        <div className="hero bg-red-300 rounded-lg min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={CoverImg} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">
                {" "}
                BEAUTY SALON <br /> FOR EVERY WOMEN
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Purus commodo ipsum duis <br /> laoreet maecenas. Feugiat
              </p>
              <button className="btn btn-secondary">Get an Appoinment</button>
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <h1 className="font-bold text-3xl text-center mt-10">
        Our Awesome <span className="text-[#F63E7B]">Services</span>
      </h1>
      <section className="flex justify-center gap-10 p-10">
        {/* Card-1 */}
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img
              src={cardImg1}
              alt="Anti Age Face Treatment"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Anti Age Face Treatment
          </h3>
          <p className="text-pink-500 text-lg">$199</p>
          <p className="text-gray-500">
            We craft stunning and amazing web UI, using a well drafted UX to fit
            your product.
          </p>
        </div>
        {/*  */}
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img
              src={cardImg2}
              alt="Hair Color & Styleing"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Hair Color & Styleing</h3>
          <p className="text-pink-500 text-lg">$99</p>
          <p className="text-gray-500">
            Amazing flyers, social media posts and brand representations that
            would make your brand stand out.
          </p>
        </div>
        {/*  */}
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img
              src={cardImg3}
              alt="Skin Care Treatment"
              className="w-16 h-16"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Skin Care Treatment</h3>
          <p className="text-pink-500 text-lg">$299</p>
          <p className="text-gray-500">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general.
          </p>
        </div>
      </section>
      {/* Button */}
      <div className="flex justify-center mt-2 mb-6">
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md">
          Explore more
        </button>
      </div>

      {/* Third Section */}
      <section className="flex items-center gap-10 p-10 bg-pink-50">
        {/* Image Div */}
        <div className="w-1/2">
          <img
            src={cardImg4}
            alt="Facial Treatment"
            className="rounded-lg w-full"
          />
        </div>
        {/* side section */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Let us handle your screen{" "}
            <span className="text-pink-500">Professionally.</span>
          </h2>
          <p className="text-gray-500 mb-6">
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </p>
          <div className="flex gap-10">
            <div>
              <p className="text-pink-500 text-3xl font-bold">500+</p>
              <p className="text-gray-500">Happy Customer</p>
            </div>
            <div>
              <p className="text-pink-500 text-3xl font-bold">16+</p>
              <p className="text-gray-500">Total Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="bg-white my-8 p-10 rounded-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        {/* People -1 */}
        <div className="flex justify-around">
          <div className=" w-1/3 px-4">
            <div className="flex gap-5">
              <div>
                <img
                  src={people1}
                  alt="Nash Patrik"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nash Patrik</h3>
                <p className="text-gray-500 mb-4">CEO, Manpol</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <div className="flex justify-normal">
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
            </div>
          </div>

          {/* People-2 */}
          <div className=" w-1/3 px-4">
            <div className="flex gap-5">
              <div>
                <img
                  src={people2}
                  alt="Miriam Barron"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Miriam Barron</h3>
                <p className="text-gray-500 mb-4">CEO, Manpol</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <div className="flex">
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
            </div>
          </div>

          {/* People-3 */}
          <div className=" w-1/3 px-4">
            <div className="flex gap-5">
              <div>
                <img
                  src={people3}
                  alt="Bria Malone"
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bria Malone </h3>
                <p className="text-gray-500 mb-4">CEO, Manpol</p>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
            <div className="flex">
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
              <img src={rating} alt="Rating" className="mx-1 w-6 h-6" />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </section>

      {/* Fifth Section */}
      <section className="bg-[#d67897] h-auto flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-center mb-4 p-3 ">
          Let us handle your <br /> project, professionally.
        </h1>
        {/* Parent Div */}
        <div className="w-2/9">
          {/* Child div */}
          <div className="flex justify-around items-center m-3 gap-3">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="text" className="input" placeholder="Last Name" />
          </div>
          <div className="flex justify-around items-center m-3 gap-3">
            <input type="email" className="input" placeholder="Email Address" />
            <input type="number" className="input" placeholder="Phone Number" />
          </div>
          <div>
            <textarea
              className="w-full mb-5 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Description here..."
              rows="4"
            ></textarea>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
