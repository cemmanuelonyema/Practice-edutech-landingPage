import React from "react";

const Categories = () => {
  return (
    <section className="w-full bg-[#F0FBF7] py-24">
      <div className="contain">
        <h1 className="md:leading-[72px] text-3xl font-bold">
          Most <span className="text-[#20B486]">Popular Categories</span>
        </h1>
        <p className="text-lg text-gray-600">
          Various versions have evolved over the years, sometimes by accident.
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1"></div>
      </div>
    </section>
  );
};

export default Categories;
