// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footermain text-black p-4 min-w-full pt-12 h-100">
      <div className="footerres  mx-auto flex justify-between items-center gap-4 mt-24">
        {/* Left div for logo and text */}
        <div className="footerone space-y-2 h-96 w-2/3 bg-black rounded-3xl p-6 relative -z-10">
          {/* Circular div */}
          <div className="circularDiv  absolute h-44 w-44 bg-[#83A0C8]/50 rounded-full animate-move filter blur-3xl"></div>

          <span className="footHeadingone text-white fontClass text-[50px] font-bold leading-70px fontClass tracking-wider">
            VINAYAN
          </span>
          <div className="footHeadingtwo text-[16px] text-white justify-start mt-0 fontClass tracking-wider">
            DRIVING INNOVATION, ENHANCING SAFETY
          </div>
          <div className="">
            <div className="Headingadd text-white mt-44 fontPara">
              E-520, Second Floor, Malik Plaza, Ramphal Chowk, Palam Extension,
              Sector-7, Dwarka, New Delhi-110075.
            </div>
          </div>
        </div>

        {/* Middle div for additional text */}
     
        <div className="footertwo flex flex-col items-start space-y-2 h-96 w-full bg-black rounded-3xl justify-start p-3">
  <div className="footertext flex h-100 w-full p-4 m-auto">
    
    {/* First List Group */}
    <div className=" footersecdiv flex flex-row items-start space-y-2 w-full rounded-3xl p-4 text-[16px] footerfont">
      <div className="space-y-2 w-full">
        <li className="text-white">ANPR</li>
        <li className="text-white">Lidar Device</li>
        <li className="text-white">2D Radar</li>
        <li className="text-white">4D Radar</li>
        <li className="text-white">Bodyworn Camera</li>
        <li className="text-white">Breath Analyser</li>
        <li className="text-white">Car Interceptor</li>
        <li className="text-white">Bullet Interceptor</li>
      </div>
  

    {/* Second List Group */}
    <div className="flex flex-col items-start space-y-2 w-full rounded-3xl p-4 text-[16px] footerfont">
      <div className="space-y-2">
        <li className="text-white">Reparing</li>
        <li className="text-white">Software Products</li>
        <li className="text-white">Customize Products</li>
      </div>
      <div className="pt-24">
        <h1 className="text-[#A8EB12] text-[20px] footerfont">Follow Us</h1>
        <div className="flex gap-12">
          <a
            href="https://www.linkedin.com/in/yourusername"
            className="text-[#0A66C2] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            className="gradient-text hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="gap-x-12">•</span>Instagram
          </a>
        </div>
        </div>
      </div>
    </div>

    {/* Third List Group */}
    <div className="flex flex-col items-start space-y-2 w-1/2 rounded-3xl p-4 text-[16px] footerfont">
      <div className="space-y-2">
        <li className="text-white">About Us</li>
        <li className="text-white">Gallery</li>
        <li className="text-white">Careers</li>
        <li className="text-white">Support</li>
      </div>
    </div>
    
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
