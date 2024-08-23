"use client";
import { useState, useEffect } from 'react';

const MobileImageSlider = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    // Prevent scrolling on the body when the slider is open
    document.body.style.overflow = 'hidden';

    // Clean up by resetting the overflow property when the component is unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const isSingleImage = images.length === 1;
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === images.length - 1;

  return (
    <div className="mobile-slider" onClick={onClose}>
      <div className="slider-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
        
        <button
          className="prev-arrow"
          onClick={prevSlide}
          disabled={isSingleImage || isAtStart}
        >
          ◀
        </button>
        <button
          className="next-arrow"
          onClick={nextSlide}
          disabled={isSingleImage || isAtEnd}
        >
          ▶
        </button>
        
        <button className="close-button" onClick={onClose}>✖</button>
      </div>

      <style jsx>{`
        .mobile-slider {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          overflow: hidden;
        }

        .slider-content {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80%;
          height: 80%;
        }

        .slider-image {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .prev-arrow, .next-arrow {
          position: absolute;
          bottom: 15%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          opacity: 0.7;
          z-index: 1001;
        }

        .prev-arrow {
          left: 10px;
        }

        .next-arrow {
          right: 10px;
        }

        .prev-arrow:disabled, .next-arrow:disabled {
          cursor: not-allowed;
          opacity: 0.3;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 20px;
          background: transparent;
          border: none;
          color: white;
          font-size: 5.5rem;
          cursor: pointer;
          z-index: 1001;
        }

        @media (min-width: 768px) {
          .mobile-slider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileImageSlider;
