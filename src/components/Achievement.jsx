import React from "react";
import { achievement } from "../assets";

const Achievement = () => {
  return (
    <section className=" bg-white py-28">
      <div className="contain grid md:grid-cols-2">
        <div className="flex flex-col justify-center ">
          <h1 className="md:leading-[72px] text-3xl font-bold">
            Our <span className="text-[#20B486]">Achievements</span>
          </h1>
          <p className="text-lg text-gray-600">
            Various versions have evolved over the years, sometimes by accident.
          </p>

          <div className="grid grid-cols-2 py-16">
            <div className="py-6 flex">
              <div className="p-4 bg-[#E9F8F3] rounded-xl"></div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300</h1>
                <p className="text-[#6D737A]">Instructor</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFFAF5] rounded-xl"></div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000+</h1>
                <p className="text-[#6D737A]">Video</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#FFEEF0] rounded-xl"></div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">20,000+</h1>
                <p className="text-[#6D737A]">Student</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#F0F7FF] rounded-xl"></div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">1,00,000+</h1>
                <p className="text-[#6D737A]">Users</p>
              </div>
            </div>
          </div>
        </div>

        <img src={achievement} className="m-auto md:order-last  order-first" />
      </div>
    </section>
  );
};

export default Achievement;