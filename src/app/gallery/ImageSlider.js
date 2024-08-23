// components/ImageSlider.js
"use client";
import { useState } from 'react';

const ImageSlider = ({ images, initialIndex, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-overlay">
      <div className="slider">
        {images.map((src, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="slider-img"
            />
            {index === activeIndex && (
              <div className="slide-number">{index + 1}</div>
            )}
          </div>
        ))}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="slider-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .slider-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .slider {
          display: flex;
          position: relative;
          width: 90%;
          height: 80%;
          overflow: hidden;
          margin:auto;
        }

        .slide {
          height: 100%;
          width: 10%;
          transition: width 0.4s ease;
          position: relative;
          margin:auto;
        }

        .slide.active {
          width: 60%;
        }

        .slider-img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border: 2px solid #141414;
        }

        .slide-number {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 5px;
          border-radius: 50%;
          font-size: 18px;
        }

        .close-btn {
          position: absolute;
          width: 40px;
          height: 40px;
          color: #000;
          top: 20px;
          right: 20px;
          border: 2px solid black;
          border-radius: 50%;
          font-size: 24px;
          cursor: pointer;
          background: white;
        }

        .slider-indicators {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
        }

        .indicator {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.3s ease;
        }

        .indicator.active {
          background: rgba(255, 255, 255, 0.8);
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
