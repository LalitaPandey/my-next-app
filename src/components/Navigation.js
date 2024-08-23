"use client";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { name: "Products", path: "/" },
  { name: "About Us", path: "/about-us", dropdown: true },
  { name: "Gallery", path: "/gallery" },
  { name: "Careers", path: "/career" },
  { name: "Support", path: "/support" },
];

const productDropdownLinks = [
  { name: "ANPR", path: "/ANPR" },
  { name: "Lidar Device", path: "/Lidar Device" },
  { name: "2D Radar", path: "/2D Radar" },
  { name: "4D Radar", path: "/4D Radar" },
  { name: "Bodyworn Camera", path: "/Bodyworn Camera" },
  { name: "Breath Analyzer", path: "/Breath Analyzer" },
  { name: "Interceptor", path: "/Interceptor" },
  { name: "Services", path: "/services" },
];

const aboutDropdownLinks = [
  { name: " About Vinayan", path: "/vinayan" },
  { name: "Contact Us", path: "/contactus" },
];

function Navigation() {
  const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleProductDropdown = () => setProductDropdownOpen(!isProductDropdownOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!isAboutDropdownOpen);

  return (
    <nav className="top-0 left-0 font-work-sans text-[#2C394B] z-50 text-[23px]">
      <ul className="flex items-center space-x-12 fontPara">
        {navLinks.map((link, index) => (
          <li key={index} className="relative group">
            {link.name === "Products" ? (
              <>
                <button
                  onClick={toggleProductDropdown}
                  className="hover:text-[#074292] focus:outline-none"
                >
                  {link.name}
                </button>
                <span className="absolute left-0 bottom-[-2px] h-[3px] bg-[#074292] w-0 group-hover:w-1/4 group-hover:left-2/3 transition-all duration-500 ease-out"></span>
                <span className="absolute right-[-24px]">•</span>
                {isProductDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 Dropdown z-10">
                    {productDropdownLinks.map((dropdownLink, idx) => (
                      <li key={idx} className="menu-item">
                        <Link href={dropdownLink.path} className="block px-4 py-2 text-[#074292]">
                          {dropdownLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : link.name === "About Us" ? (
              <>
                <button
                  onClick={toggleAboutDropdown}
                  className="hover:text-[#074292] focus:outline-none"
                >
                  {link.name}
                </button>
                <span className="absolute left-0 bottom-[-2px] h-[3px] bg-[#074292] w-0 group-hover:w-1/4 group-hover:left-2/3 transition-all duration-500 ease-out"></span>
                <span className="absolute right-[-24px]">•</span>
                {isAboutDropdownOpen && (
                  <ul className="absolute top-full left-0 mt-2 about-dropdown z-10">
                    {aboutDropdownLinks.map((dropdownLink, idx) => (
                      <li key={idx} className="menu-item">
                        <Link href={dropdownLink.path} className="block px-4 py-2 text-[#074292]">
                          {dropdownLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <>
                <Link href={link.path} className="hover:text-[#074292]">
                  {link.name}
                </Link>
                <span className="absolute left-0 bottom-[-2px] h-[3px] bg-[#074292] w-0 group-hover:w-1/4 group-hover:left-2/3 transition-all duration-500 ease-out"></span>
                {index < navLinks.length - 1 && (
                  <span className="absolute right-[-24px]">•</span>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
