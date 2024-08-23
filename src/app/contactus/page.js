"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ContactUs.module.css"; // Import the CSS module
import location from "../../app/images/location.png";
import mail from "../../app/images/mail.png";
const ContactUs = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleStepTransition = () => {
      if (currentStep === 0) {
        setTimeout(() => setCurrentStep(1), 2000); // Show "VINAYAN" for 2 seconds
      } else if (currentStep === 1) {
        const section = document.getElementById("animatedSection");
        section.classList.add(styles.slideUp); // Add class to animate section
        setTimeout(() => {
          section.classList.add(styles.middleSectionWithBackground); // Add background color when moving up
          setTimeout(() => {
            section.classList.remove(styles.slideUp); // Remove slide up class
            section.classList.add(styles.slideOut); // Slide out
            setTimeout(() => setCurrentStep(2), 1000); // Show contact details after slide out
          }, 2000); // Duration of slide up effect
        }, 1000); // Delay before adding background color
      }
    };

    handleStepTransition();
  }, [currentStep]);

  return (
    <section className="gallerysection">
      <div className={styles.contactUs}>
        {currentStep === 0 && (
          <div className={`${styles.heading} ${styles.show}`}>
            <h1 className="tracking-wider">VINAYAN</h1>
          </div>
        )}
        {currentStep === 1 && (
          <div
            id="animatedSection"
            className={`${styles.middleSection} ${styles.show}`}
            style={{ display: currentStep === 2 ? "none" : "block" }} // Hide when currentStep is 2
          >
            <h2 className="tracking-wider">GET IN TOUCH</h2>
          </div>
        )}
        {currentStep === 2 && (
          <div className={`${styles.contactdetails} ${styles.show}`}>
            <h1 className="mainheading">It’s so nice to meet you</h1>
            <h3>GET IN TOUCH</h3>
            <p>
              If you have questions about our services or want to give feedback,
              we’d love to hear from you.
            </p>
            <section className="w-full  p-24 ">
              <div className="flex w-full">
                {/* Left Side */}
                <div className="w-full text-start">
                  <p className={styles.formheadd}>
                    Fill out the attached form and we’ll contact you as soon as
                    we get
                  </p>
                  <h3 className={styles.formheadtwo}>Contact with Us here</h3>
                  <div className="flex mt-6  items-center  gap-12">
                    {/* Left side with icon and text */}
                    <div className="flex items-center justify-center rounded-3xl border border-[#83A0C8]  w-12 h-12 ">
                      <span>
                        <Image src={location} alt="icon" className="w-6 h-6" />
                      </span>
                    </div>

                    {/* Right side with two text items stacked vertically */}
                    <div className="flex flex-col">
                      <span className={styles.formlocation}>Location</span>
                      <span className={styles.forminfo}>
                        Ramphal chowk, Delhi India
                      </span>
                    </div>
                  </div>
                  <div className="flex mt-6  items-center  gap-12">
                    {/* Left side with icon and text */}
                    <div className="flex items-center justify-center rounded-3xl border border-[#83A0C8] w-12 h-12">
                      <span>
                        <Image src={mail} alt="icon" className="w-6 h-6" />
                      </span>
                    </div>

                    {/* Right side with two text items stacked vertically */}
                    <div className="flex flex-col">
                      <span className={styles.formlocation}>Email</span>
                      <span className={styles.forminfo}>info@vinayan.in</span>
                    </div>
                  </div>
                </div>
                {/* Right Side */}
                <div className="w-full  md:mt-0">
                  <form className="flex flex-col space-y-4 text-start">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        placeholder="Type your name"
                        className="w-full border p-2 pt-6 placeholder-gray-500 text-white bg-gray-800 peer"
                      />
                      <label
                        htmlFor="name"
                        className="absolute top-2 left-2 text-white peer-placeholder-shown:top-4 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-300"
                      >
                        Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        placeholder=""
                        className="w-full border p-2 pt-6 peer placeholder-transparent"
                      />
                      <label
                        htmlFor="email"
                        className="absolute top-2 left-2 text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-300"
                      >
                        Email
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        id="phone"
                        placeholder=" "
                        className="w-full border p-2 pt-6 peer placeholder-transparent"
                      />
                      <label
                        htmlFor="phone"
                        className="absolute top-2 left-2 text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-300"
                      >
                        Phone No
                      </label>
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        placeholder=" "
                        className="w-full border p-2 pt-6 peer placeholder-transparent"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className="absolute top-2 left-2 text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-300"
                      >
                        Message
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="careerbutton relative bg-[#A8EB12] tracking-wider font-semibold px-4 py-2 mt-4 w-full m-auto font-staatliches text-3xl overflow-hidden transition-all duration-500 border-border"
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
            </section>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
