"use client";
import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { NavData } from "../data/NavData";
import * as Components from "../components";
import logo from "../../public/logo.svg";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <section
      id="nav"
      className=" w-[100vw] h-[100px] grid grid-cols-3 items-center px-10 "
    >
      <Link href="/" className="navbar-brand  ">
        <Image src={logo} alt="logo" className="w-[100px] h-[100px]" />
      </Link>

      <div className=" flex justify-end lg:grid lg:justify-center ">
        <div className="hidden md:flex  gap-4 items-center">
          {NavData.map((navLink, index) => (
            <Components.CustomLink
              key={index}
              href={navLink.href}
              title={navLink.title}
              // className="mr-6"
            />
          ))}
        </div>

        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none right-0"
          onClick={handleClick}
        >
          <CiMenuBurger size="24" className="text-black" />
        </button>
      </div>

      {isOpen && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 z-50 bg-blackBackground md:hidden overflow-auto transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div
            className=" py-10 items-center justify-end h-screen px-4"
            onClick={handleClose}
          >
            <button
              id="menu-btn"
              className="block hamburger md:hidden focus:outline-none relative right-0 "
              onClick={handleClose}
            >
              <IoClose size={28} className="text-white" />
            </button>

            <div className="pt-12">
              <div className="flex flex-col text-center items-center text-white">
                {NavData.map((navLink, index) => (
                  <Components.CustomLink
                    key={index}
                    href={navLink.href}
                    title={navLink.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nav;
