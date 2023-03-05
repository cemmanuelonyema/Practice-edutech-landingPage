import React from "react";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";

const Companies = () => {
  return (
    <section className=" bg-[#f7f7f7] py-16">
      <div className="contain text-center">
        <h1 className=" text-2xl md:font-bold font-extrabold text-[#536E96]">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className=" text-[#536E96] text-xl py-4">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </p>
        <div className="md:w-[60%] w-[90%] m-auto  grid md:grid-cols-4 grid-cols-2 gap-4 py-6 md:gap-8 ">
          <img src={companyLogo1} />
          <img src={companyLogo2} />
          <img src={companyLogo3} />
          <img src={companyLogo4} />
        </div>
      </div>
    </section>
  );
};

export default Companies;
