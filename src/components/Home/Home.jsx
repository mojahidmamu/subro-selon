import React from "react";
import CoverImg from "../../assets/assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";

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
              <button className="btn btn-primary">Get an Appoinment</button>
            </div>
          </div>
        </div>
      </section>
      {/* Second section */}
      <section>
        <h1 className="font-bold text-3xl text-center my-5">Our Awesome <span className="text-[#F63E7B]">Services</span></h1>
      </section>
    </div>
  );
};

export default Home;
