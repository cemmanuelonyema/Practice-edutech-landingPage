//package imports
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
//files imports
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <section className=" bg-white py-16 md:py-24">
      <div className="contain grid md:grid-cols-2 gap-6  items-center ">
        <div className="flex flex-col gap-4 ">
          <p className=" md:text-2xl text-[#20B486] font-semibold">
            START TO SUCCESS
          </p>
          <h1 className=" text-2xl font-semibold md:text-[45px] md:leading-[64px]">
            Access To <span className="text-[#20B486] font-bold">5000+</span>{" "}
            Courses from <span className="text-[#20B486] font-bold">300</span>{" "}
            Instructors & Institutions
          </h1>
          <p className="text-[#6D737A] md:text-lg">
            Various versions have evolved over the years, sometimes by accident,
          </p>
          <form className="bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between">
            <input
              className="bg-white p-1 outline-none"
              type="text"
              placeholder="What do you want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img src={heroImg} />
      </div>
    </section>
  );
};

export default Hero;

//  <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">
//    <div className="flex flex-col justify-start gap-4">
//
//      <h1 className="md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold">
//        Access To <span className="text-[#20B486]">5000+</span> Courses from{" "}
//        <span className="text-[#20B486]">300</span> Instructors & Institutions
//      </h1>
//      <p className="py-2 text-lg text-gray-600">
//        Various versions have evolved over the years, sometimes by accident.
//      </p>

//    </div>

//
//  </div>;
