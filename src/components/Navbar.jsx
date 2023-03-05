import React, { useState } from "react";
import { logo, hamburgerMenu, close, lock } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <header className="w-full h-[96px] bg-white border border-[20B486]">
      <div className="contain py-6 flex justify-between items-center m-auto">
        <img src={logo} alt="logo" />

        <nav className="hidden md:flex ">
          <ul className="flex gap-4">
            <li>
              <a className="" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="" href="#course">
                Course
              </a>
            </li>
            <li>
              <a className="" href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a className="" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:flex  gap-6">
          <button className="flex justify-between items-center  bg-transparent   gap-2">
            <img src={lock} /> Login
          </button>
          <button className="px-6 py-3  rounded-md bg-[#20B486] font-bold text-white ">
            Sign up for free
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="" />
        </div>
      </div>

      <nav
        className={
          toggle
            ? "absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100">Home</li>
          <li className="p-4 hover:bg-gray-100">About</li>
          <li className="p-4 hover:bg-gray-100">Support</li>
          <li className="p-4 hover:bg-gray-100">Platform</li>
          <li className="p-4 hover:bg-gray-100">Pricing</li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[20B486] flex justify-center items-center  bg-transparent px-6 py-4 gap-2 ">
              <img src={lock} />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
