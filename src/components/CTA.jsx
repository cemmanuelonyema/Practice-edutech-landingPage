import React from "react";
import { cta } from "../assets";

const CTA = () => {
  return (
    <section className=" bg-[#E9F8F3] py-24">
      <div className="contain grid md:grid-cols-2 items-center">
        <img src={cta} className="" />

        <div className="mt-8">
          <h1 className="py-2  text-3xl font-semibold">
            Join <span className="text-[#20B486]">World's largest</span>{" "}
            learning platform today{" "}
          </h1>
          <p className="py-2 text-lg text-gray-600">
            Start learning by registering for free
          </p>
          <button className="max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
