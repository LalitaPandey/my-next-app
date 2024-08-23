import { useState } from "react";
import Image from "next/image";
import logo from "../../src/app/images/logo.png";
import product from "../../src/app/images/product.png";
import next from "../../src/app/images/next.png";
import pre from "../../src/app/images/pre.png";
import video from "../../src/app/images/video.png.webp";
const ProductCard = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const products = [
    {
      image: product,
      title: "4D Radar",
      description:
        "Lorem ipsum dolor sit amet,  venenatis, vel consequat purus interdum. Duis laoreet urna ut turpis dictum, et scelerisque orci feugiat. Curabitur ac lectus non ligula scelerisque semper at sed tortor.",
    },
    {
      image: product,
      title: "ANPR ",
      description:
        "Lorem ipsum dolor  vitae metus eu nisi, consecteetur adipiscing elit. Nullam vitae metus eu nisi, at vehicula libero tincidunt. Phasellus vehicula urna id erat venenatis, vel consequat purus interdum. Duis laoreet urna ut turpis dictum, et scelerisque orci feugiat.",
    },
    {
      image: product,
      title: "Car Interceptor ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing eli non ac metus. Integer efficitur, dui in ultrices tempor, odio magna viverra purus, sed malesuada libero mauris id sapien. Aenean venenatis magna sed ipsum bibendum, at vehicula libero tincidunt. Phasellus vehicula urna id erat venenatis, vel consequat purus interdum. Duis laoreet urna ut turpis dictum, et scelerisque orci feugiat.",
    },
    // Add more products as needed
  ];

  const handleNextClick = () => {
    if (currentProduct < products.length - 1) {
      setAnimationDirection("next");
      setTimeout(() => {
        setCurrentProduct((prevIndex) => prevIndex + 1);
        setAnimationDirection("enter-next");
      }, 600); // Match the duration of the animation
    }
  };

  const handlePrevClick = () => {
    if (currentProduct > 0) {
      setAnimationDirection("prev");
      setTimeout(() => {
        setCurrentProduct((prevIndex) => prevIndex - 1);
        setAnimationDirection("enter-prev");
      }, 600); // Match the duration of the animation
    }
  };

  return (
    <div className="flex flex-col m-auto productCard">
      <div className=" productmaindiv flex flex-col md:flex-row md:items-start mt-16 ml-16 gap-5">
        {/* Image Section */}
        <div className=" productresp md:w-1/2 m-auto">
          <Image
            src={products[currentProduct].image}
            alt={products[currentProduct].title}
            width={450}
            height={550}
            className={`object-cover rounded-3xl transition-transform duration-600 ${
              animationDirection === "next"
                ? "animate-slide-out-left-rotate"
                : animationDirection === "prev"
                ? "animate-slide-in-right-rotate"
                : animationDirection === "enter-next"
                ? "animate-slide-in-left-rotate"
                : animationDirection === "enter-prev"
                ? "animate-slide-out-right-rotate"
                : ""
            }`}
            onAnimationEnd={() => setAnimationDirection(null)}
          />
        </div>

        {/* Text Section */}
        <div className=" productheading md:ml-2 mt-8 md:mt-4  justify-center md:w-full">
          <p className="titlehead text-2xl font-bold">
            {products[currentProduct].title}
          </p>
          <p className="text-md font-normal text-[#2C394B] mt-2 ">
            {products[currentProduct].description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex space-x-4 justify-end fontPara mb-4 mr-12">
        <button
          onClick={handlePrevClick}
          disabled={currentProduct === 0}
          className={`buttonPro flex items-center justify-center ${
            currentProduct === 0
              ? "bg-[#FFEEA9] text-gray-700 cursor-not-allowed"
              : "bg-[#A8EB12] rounded-full"
          }`}
        >
          <Image
            src={pre}
            alt="previous"
            width={20}
            height={20}
            className={currentProduct === 0 ? "opacity-50" : ""}
          />
        </button>

        <button
          onClick={handleNextClick}
          disabled={currentProduct === products.length - 1}
          className={`buttonPro flex items-center justify-center ${
            currentProduct === products.length - 1
              ? "bg-[#FFEEA9] text-gray-700 cursor-not-allowed"
              : "bg-[#A8EB12] text-white"
          }`}
        >
          <Image
            src={next}
            alt="next"
            width={20}
            height={20}
            className={currentProduct === 0 ? "opacity-50" : ""}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
