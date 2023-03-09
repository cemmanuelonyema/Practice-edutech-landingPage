import React from "react";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import CourseCard from "./CourseCard";

const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className=" bg-[#E9F8F3B2] py-32">
      <div className="contain">
        <div className="py-4">
          <h1 className="py-3 text-3xl font-bold">
            Most Popular <span className="text-[#20B486]">Courses</span>
          </h1>
          <p className="text-[#6D737A]">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>
        <Slider {...settings} className="px-5">
          {courses.map((course, i) => (
            <div key={i}>
              <CourseCard course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
