import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[70px] absolute bg-black/20">
      <div className="max-w-[1240px] mx-auto px-2 flex justify-between items-center h-full">
        <div>
          <img src="" width="200" height="auto" alt="/" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-white items-end">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={handleNav}
          className="block md:hidden transition duration-500 ease-in-out"
        >
          {nav ? (
            <AiOutlineClose
              size={30}
              className="text-[#2b24ab] cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="text-[#1c3378] cursor-pointer"
            />
          )}
        </div>

        <div
          className={
            nav
              ? "w-full bg-black/90 absolute top-[80px] left-0 py-8 flex justify-center text-center text-white transition duration-500 ease-in-out"
              : "absolute left-[-100%] transition duration-500 ease-in-out"
          }
        >
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Products</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
