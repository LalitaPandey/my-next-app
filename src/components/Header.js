"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import carr from "../../src/app/images/car.jpg";
import Nav from "./Navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu
  const [isProductsOpen, setIsProductsOpen] = useState(false); // State for products dropdown
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for services dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
    // Reset Services dropdown state when Products dropdown is toggled
    if (isProductsOpen) {
      setIsServicesOpen(false);
    }
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="py-4 xl:py-2 text-white bg-white">
      <div className="container mx-auto flex justify-between items-center Headerlogo">
        <div className="text-lg font-semibold Headerlogo">
          <Image
            src={carr}
            alt="Vinayan Img"
            className="inline-block"
            width={168}
            height={100}
          />
        </div>
        {/* Include Navigation here */}
        <div className="hidden lg:flex items-center gap-5">
          <Nav />
        </div>
        {/* Hamburger Menu */}
        <div className="lg:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-24 h-24"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
          {/* Dropdown Menu */}
          <div
            className={` navmobile fixed inset-y-0 right-0  bg-white text-black w-11/12 rounded-lg shadow-lg z-50 transition-transform transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Cross Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-10 right-4 text-black focus:outline-none"
            >
              <svg
                className="w-24 h-24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <ul className="flex flex-col justify-center items-start p-12 space-y-18 hamburgerlink pt-24">
              <li className="ml-5 relative p-8">
                <button
                  onClick={toggleProductsDropdown}
                  className="focus:outline-none"
                >
                  <span className="absolute left-[-24px]">•</span> Products
                </button>
                {/* Products Dropdown Menu */}
                {isProductsOpen && (
                  <ul className="productfont flex flex-col space-y-12 mt-5 ml-6">
                    <li>
                      <Link href="/products/anpr">ANPR</Link>
                    </li>
                    <li>
                      <Link href="/products/lidar">Lidar Device</Link>
                    </li>
                    <li>
                      <Link href="/products/2d-radar">2D Radar</Link>
                    </li>
                    <li>
                      <Link href="/products/4d-radar">4D Radar</Link>
                    </li>
                    <li>
                      <Link href="/products/bodyworn-camera">
                        Bodyworn Camera
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/breath-analyser">
                        Breath Analyser
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/interceptor">Interceptor</Link>
                    </li>
                    {/* Services Dropdown under Products */}
                    <li className="relative justify-between space-y-6">
                      <button
                        onClick={toggleServicesDropdown}
                        className="flex items-center space-x-2 focus:outline-none"
                      >
                      <div className="flex items-center gap-24">
  <span>Services</span>
  <span
    className={`text-6xl transform transition-transform ${
      isServicesOpen ? "rotate-90" : "-rotate-90"
    }`}
  >
    {"<"}
  </span>
</div>



                      </button>
                      {/* Services Dropdown Menu */}
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isServicesOpen
                            ? "mt-2 max-h-[300px] opacity-100"
                            : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                      >
                        <ul className="flex flex-col ml-8 space-y-8">
                          <li className="hover:bg-gray-100 transition-colors">
                            <Link href="/services/repairing">Repairing</Link>
                          </li>
                          <li className="hover:bg-gray-100 transition-colors">
                            <Link href="/services/software-products">
                              Software Products
                            </Link>
                          </li>
                         
                          <li className="hover:bg-gray-100 transition-colors">
                            <Link href="/services/softwarer-products">
                              Customize Products
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
              <li className="ml-5 relative p-8">
                <span className="absolute left-[-24px]">•</span>
                <Link href="/about">About Us</Link>
              </li>
              <li className="ml-5 relative p-8">
                <span className="absolute left-[-24px]">•</span>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="ml-5 relative p-8">
                <span className="absolute left-[-24px]">•</span>
                <Link href="/career">Career</Link>
              </li>
              <li className="ml-5 relative p-8">
                <span className="absolute left-[-24px]">•</span>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
