"use client";
import React, { useState } from "react";
import Image from "next/image";
import career from "../../app/images/career.png";

function Career() {
  const [activeField, setActiveField] = useState(null);

  const handleFocus = (field) => {
    setActiveField(field);
  };

  const handleBlur = () => {
    setActiveField(null);
  };

  return (
    <div className="containerr">
      {/* Image Section */}
      <div className="Career-img relative">
        <Image src={career} alt="Career Image" className="text-white" />
      </div>

      {/* Heading Section */}
      <p className="careerhead text-lg text-center mt-12 font-worksans">
        Drop your details in the form below, and let’s connect!
      </p>

      {/* Input Fields Section */}
      <div className=" Main-inputfield  max-w-lg mx-auto mt-16 ">
        <form className=" career-form grid grid-cols-1 gap-6 font-worksans">
          {[
            { id: "full-name", label: "Full Name", type: "text" },
            { id: "phone-number", label: "Phone Number", type: "text" },
            { id: "email", label: "Email", type: "text" },
            { id: "position", label: "Position", type: "text" },
            { id: "cover-letter", label: "Cover Letter", type: "textarea" },
            { id: "resume", label: "Resume", type: "file" },
          ].map(({ id, label, type }) => (
            <div className="relative flex" key={id}>
              <div
                className={`careerfont w-1/3 px-4 py-3 transition-colors duration-300 ${
                  activeField === id
                    ? "bg-gradient-to-r from-[#83A0C8] to-[#A8EB12] text-[#074292] font-semibold text-[40px] sm:text-[16px]"
                    : "bg-transparent gradient-Input"
                }`}
              >
                {label}
              </div>

              <input
                id={id}
                type={type}
                onFocus={() => handleFocus(id)}
                onBlur={handleBlur}
                className="w-2/3  outline-none pl-4 cursor-input text-[50px] sm:text-[16px]  "
              />
            </div>
          ))}

          <button
            type="submit"
            className="careerbutton relative bg-[#A8EB12] tracking-wider font-semibold px-4 py-2 mt-4 w-1/3 m-auto font-staatliches text-3xl overflow-hidden transition-all duration-500 border-border"
          >
            SEND
            <span className="border-top absolute top-0 left-0 w-[4px] h-[2px] bg-[#000] transition-all duration-500"></span>
            <span className="border-bottom absolute bottom-0 right-0 w-[4px] h-[2px] bg-[#000] transition-all duration-500"></span>
            <span className="border-left absolute bottom-0 left-0 w-[3px] h-[2px] bg-[#000] transition-all duration-500"></span>
            <span className="border-right absolute top-0 right-0 w-[3px] h-[2px] bg-[#000] transition-all duration-500"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Career;
