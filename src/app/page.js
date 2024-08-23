"use client"; // Indicates this file includes client-side code
import { useState } from "react";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../src/app/images/arrow.png";
import logo from "../../src/app/images/logo.png";
import logo2 from "../../src/app/images/logo2.png";
import logo3 from "../../src/app/images/logo3.png";
import logo4 from "../../src/app/images/logo4.png";
import logo5 from "../../src/app/images/logo5.png";
import logo6 from "../../src/app/images/logo6.png";
import logo7 from "../../src/app/images/logo7.png";
import logo8 from "../../src/app/images/logo8.png";
import logo9 from "../../src/app/images/logo9.png";
import logo10 from "../../src/app/images/logo10.png";
import logo11 from "../../src/app/images/logo11.png";
import logo12 from "../../src/app/images/logo12.png";
import logo13 from "../../src/app/images/logo13.png";
import logo14 from "../../src/app/images/logo14.png";
import logo15 from "../../src/app/images/logo15.png";
import logop1 from "../../src/app/images/logop1.png";
import logop2 from "../../src/app/images/logop2.png";
import logop3 from "../../src/app/images/logop3.png";
import logop4 from "../../src/app/images/logop4.png";


// import { Swiper, SwiperSlide } from "swiper/react";
import Heighlights from "../components/Highlights";
import product from "../../src/app/images/product.png";
import DropdownComponent from "../components/DropdownComponent";
import ProductCard from "../components/ProductCard";
import video from "../../src/app/images/video.png.webp";

export default function Home() {
  return (
    <div className="relative">
      <div className="nextgenheading flex items-center justify-center h-screen">
        <div className="text-center space-y-6 gradient-change font-work-sans  mx-auto">
          <h1 className=" fontClass tracking-wider text-8xl font-extrabold animate-scroll-up animate-gradient text-gradient mb-4 ">
            NEXT-GEN TRAFFIC
          </h1>
          <h1 className=" fontClass tracking-wider font-extrabold text-8xl animate-scroll-up animate-gradient text-gradient mt-2">
            MANAGEMENT SYSTEM
          </h1>

          <h1 className="fontPara text-[19px] font-normal leading-[19.94px] text-center p-2 text-[#999999]">
            Experience a new era of traffic control through our advanced
            Handheld Traffic Management System. Precision with AI Powered by
            state-of-the-art.
          </h1>

          <div className="flex flex-col lg:flex-row justify-center p-8 fontPara">
            <div className="flex lg:items-center gap-4 flex-col lg:flex-row">
              <div className="trendinghead flex  items-center lg:flex-row lg:items-center gap-4">
                <div className="trending-today text-white text-[17px] mb-2 lg:mb-0">
                  Trending Today
                </div>
                <Image
                  src={arrow}
                  alt="Vinayan Img"
                  className=" text-white lg:ml-2 mb-2 lg:mb-0"
                  width={100}
                  height={100}
                />
              </div>

              <div className=" treandingProduct flex  lg:flex lg:items-center gap-4">
                <div className=" sm:items-center relative group">
                  <div className=" trendingfont text-[#074292] text-[16px] w-[107px] h-[30px] bg-[#A8EB12] rounded-[12px] flex items-center justify-center">
                    4D Radar
                  </div>
                  <div className=" Imagetooltip absolute top-[120%] left-1/2 transform -translate-x-1/2 bg-white text-black p-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[180px]">
                    <Image
                      src={product}
                      alt="tooltip image"
                      className="w-full h-auto rounded"
                    />
                    <div className="flex items-start">
                      <div className=" Radarfont  text-sm font-medium text-start">
                        <span className=" text-md font-semibold">
                          4D Radar:
                        </span>{" "}
                        Lorem text is good for styling development.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className=" trendingfont text-[#074292] text-[16px] w-[107px] h-[30px] bg-[#A8EB12] rounded-[12px] flex items-center justify-center">
                    2D Radar
                  </div>
                  <div className=" Imagetooltip absolute top-[120%] left-1/2 transform -translate-x-1/2 bg-white text-black p-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[180px]">
                    <Image
                      src={product}
                      alt="tooltip image"
                      className="w-full h-auto rounded"
                    />
                    <div className="flex items-start">
                      <div className="Radarfont text-sm font-medium text-start">
                        <span className="text-md font-semibold">2D Radar:</span>{" "}
                        Lorem text is good for development.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className=" trendingfont text-[#074292] text-[16px] w-[107px] h-[30px] bg-[#A8EB12] rounded-[12px] flex items-center justify-center">
                    Interceptor
                  </div>
                  <div className=" Imagetooltip absolute top-[120%] left-1/2 transform -translate-x-1/2 bg-white text-black p-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[180px]">
                    <Image
                      src={product}
                      alt="tooltip image"
                      className="w-full h-auto rounded"
                    />
                    <div className="flex items-start">
                      <div className="Radarfont text-sm font-medium text-start">
                        <span className="text-md font-semibold">
                          Interceptor:
                        </span>{" "}
                        Lorem text is good for development.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className=" trendingfont text-[#074292] text-[16px] w-[107px] h-[30px] bg-[#A8EB12] rounded-[12px] flex items-center justify-center">
                    ANPR
                  </div>
                  <div className=" Imagetooltip absolute top-[120%] left-1/2 transform -translate-x-1/2 bg-white text-black p-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[180px]">
                    <Image
                      src={product}
                      alt="tooltip image"
                      className="w-full h-auto rounded"
                    />
                    <div className="flex items-start">
                      <div className="Radarfont text-sm font-medium text-start">
                        <span className="text-md font-semibold">ANPR:</span>{" "}
                        Lorem text is good for development.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-0 top-0">
        <div className="bg-gray-200 w-11/12 h-screen mx-auto rounded-md shadow-lg">
          <Image
            src={video}
            alt="Your Image Description"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div>
        <h1 className=" fontMainheading pt-12  text-[50px] font-bold leading-70px tracking-0.02em text-center">
          OUR CLIENTS
        </h1>
        <div className="flex-wrap-responsive flex justify-center m-auto pt-24 ">
          <div className="">
            <Image
              src={logo}
              alt="Vinayan Img"
              className=" responsive-image  inline-block  rounded-full p-2 bg-white "
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo2}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo3}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo4}
              alt="Vinayan Img"
              className=" responsive-image  inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo5}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo6}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className=" ">
            <Image
              src={logo7}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo8}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
        </div>
        <div className="flex-wrap-responsive flex justify-center m-auto pt-24">
          <div className="">
            <Image
              src={logo9}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo10}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo11}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo12}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>

          <div className=" ">
            <Image
              src={logo13}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo14}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo15}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
          <div className="">
            <Image
              src={logo}
              alt="Vinayan Img"
              className=" responsive-image inline-block  rounded-full p-2 bg-white"
              width={110}
              height={110}
            />
          </div>
        </div>
        <div className=" seeCard flex flex-col items-center justify-center h-96 bg-black mt-24">
          <div className="flex items-center justify-center h-72 ">
            <span className="text-5xl mr-2 mt-16 text-[#A8EB12] custom-bubblegum-text">
              see
            </span>
            <span className="fontMainheading pt-12 text-[50px] font-bold leading-70px tracking-wider">
              WHAT STATS SAYS
            </span>
          </div>
          <div className="flex  items-center mb-16 gap-24  mainCard ">
            <div className=" bg-[#A1C4FD] w-64 h-40  rounded-3xl p-12 text-center mainCardtwo gap-4 ">
              <div className=" flex flex-col items-center justify-center mx-auto ">
                <span className=" cardFont text-4xl font-bold text-[#074292] inline-block transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2">
                  60+
                </span>
                <div className=" cardFonttwo text-base mt-4 text-[#074292]">
                  Cities Covered
                </div>
              </div>
            </div>
            <div className=" bg-[#C2E9FB] w-64 h-40  rounded-3xl p-12 text-center mainCardtwo gap-4">
              <span className=" cardFont text-4xl font-bold text-[#074292] inline-block transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2">
                70+
              </span>

              <div className=" cardFonttwo text-base mt-4 text-[#074292]">
                Device Delivered
              </div>
            </div>
            <div className=" bg-[#A1C4FD] w-64 h-40  rounded-3xl p-12 text-center mainCardtwo gap-4">
              <span className=" cardFont text-4xl font-bold text-[#074292] inline-block transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:translate-y-2">
                300+
              </span>

              <div className=" cardFonttwo text-base mt-4 text-[#074292]">
                Happy Clients
              </div>
            </div>
          </div>
        </div>
        <div className=" fontMainheading tracking-wider text-center p-24  pt-12 text-[50px] font-bold leading-70px ">
          FEATURED PRODUCTS
        </div>
        <div className="  proCard m-auto">
          <ProductCard />
        </div>
        <div className=" partermaindiv border-t-2 border-b-2 border-[#999999] mt-16 w-11/12 m-auto p-12">
          <div className="">
            <div className=" partnerSection flex gap-x-12 w-full">
              <div className=" tracking-wider m-auto text-start text-[50px] font-bold leading-70px fontMainheading ">
                PARTNERS
              </div>
              <div className="partnerlogo flex gap-12">
                <div>
                  <Image
                    src={logop1}
                    alt="Vinayan Img"
                    className="inline-block border-2 border-[#83A0C8] border-dashed rounded-full p-3 bg-white"
                    width={130}
                    height={130}
                  />
                </div>
                <div>
                  <Image
                    src={logop2}
                    alt="Vinayan Img"
                    className="inline-block border-2 border-[#83A0C8] border-dashed rounded-full p-3 bg-white"
                    width={130}
                    height={130}
                  />
                </div>
                <div>
                  <Image
                    src={logop3}
                    alt="Vinayan Img"
                    className="inline-block border-2 border-[#83A0C8] border-dashed rounded-full p-3 bg-white"
                    width={130}
                    height={130}
                  />
                </div>
              </div>
              <div className="partnerlogo flex gap-12 ">
                <div>
                  <Image
                    src={logop4}
                    alt="Vinayan Img"
                    className="inline-block border-2 border-[#83A0C8] border-dashed rounded-full p-3 bg-white"
                    width={130}
                    height={130}
                  />
                </div>
                <div>
                  <Image
                    src={logop1}
                    alt="Vinayan Img"
                    className="inline-block border-2 border-[#83A0C8] border-dashed rounded-full p-3 bg-white"
                    width={130}
                    height={130}
                  />
                </div>
                <div>
                  <Image
                    src={logo2}
                    alt="Vinayan Img"
                    className="inline-block border-2 border-[#83A0C8] border-dashed rounded-full p-3 bg-white"
                    width={130}
                    height={130}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <Heighlights />
        </section>
        <div className="bg-black w-full p-12">
          <div className="marquee">
            <div className="marquee-content gap-12 fontHead text-white">
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              {/* Duplicate the content to ensure continuous scrolling */}
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
              <h1>FAQs</h1>
            </div>
          </div>
        </div>

        <div className="h-screen bg-[#2C394B] pt-12">
          <DropdownComponent />
          <DropdownComponent />
          <DropdownComponent />
          <DropdownComponent />
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-scroll-up {
          animation: scroll-up 2s ease-out;
        }
      `}</style>
    </div>
  );
}
