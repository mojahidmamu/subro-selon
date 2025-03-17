import React from "react";
import people1 from "../../assets/assets/images/Ellipse 90.png";
import people2 from "../../assets/assets/images/Ellipse 91.png";
import people3 from "../../assets/assets/images/Ellipse 92.png";
import rating from "../../assets/assets/icons/Group 33040.png";

const Portfolio = () => {
  return (
    <div>
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
    </div>
  );
};

export default Portfolio;
