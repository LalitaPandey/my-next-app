"use client";
import { useState } from 'react';
import ImageSlider from './ImageSlider';
import MobileImageSlider from './mobileImageSlider'; // Import the mobile slider component

const ImageGallery = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_640.jpg",
    "https://cdn.pixabay.com/photo/2023/09/17/11/08/dahlias-8258327_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/21/17/44/flower-8204791_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/28/20/36/flower-8155951_640.jpg",
  ];

  const sliderImages = [
    "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg",
    "https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid",
    "https://hips.hearstapps.com/hmg-prod/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg",
    "https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/28/20/36/flower-8155951_640.jpg"
  ];

  const openSlider = (index) => {
    setCurrentIndex(index);
    setIsSliderOpen(true);
  };

  return (
    <section className='gallerysection'>
      <div className="container-gallery grid grid-cols-2  gap-8 md:grid-cols-4 md:gap-6 p-12">
        {images.map((src, index) => (
          <div
            key={index}
            className="img-wrapper"
            onClick={() => openSlider(index)}
          >
            <div className="img-overlay">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="img"
              />
          </div>
          <span className="overlaytext ">UP Transport Police</span>
          <span className="overlay-textt">16.04.2024</span>
          </div>
          
        ))}
      </div>

      {isSliderOpen && (
        <>
          {/* Show only on screens wider than 767px */}
          <div className="hidden md:block">
            <ImageSlider
              images={sliderImages}
              initialIndex={currentIndex}
              onClose={() => setIsSliderOpen(false)}
            />
          </div>

          {/* Show only on screens 767px and below */}
          <div className="block md:hidden">
            <MobileImageSlider
              images={sliderImages}
              initialIndex={currentIndex}
              onClose={() => setIsSliderOpen(false)}
            />
          </div>
        </>
      )}

      <style jsx>{`
        .img-wrapper {
          position: relative;
          flex: 1;
          cursor: pointer;
          overflow: hidden;
        }

        .img-overlay {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
       
          filter: grayscale(0%);
        }

        .img-wrapper:hover .img {
          filter: grayscale(100%);
        }

        .overlay-textt {
          position: absolute;
          top: 85%;
          left: 10%;
          color: white;
          font-size: 1rem;
          font-weight: samibold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          font-family: "Work Sans";
        }

        .overlaytext {
          position: absolute;
          top: 70%;
          left: 10%;
          color: white;
          font-size: 1.1rem;
          font-weight: samibold;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          font-family: "Work Sans";
        }
      `}</style>
    </section>
  );
};

export default ImageGallery;
