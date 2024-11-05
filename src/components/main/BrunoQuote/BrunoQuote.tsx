import { useState, useEffect } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import testimonials from "../../../data/testimonials.json";

export const BrunoQuote = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-white font-montserrat flex items-center justify-center px-4">
      {/* Arrow buttons positioned separately from the quote */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 md:left-10 lg:left-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900 p-2"
        aria-label="Previous Slide"
      >
        <SlArrowLeft size={24} className=" md:size-8" />
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 md:right-10 lg:right-20 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-900 p-2"
        aria-label="Next Slide"
      >
        <SlArrowRight size={24} className="md:size-8" />
      </button>

      {/* Quote container centered between arrows */}
      <div className="max-w-2xl lg:max-w-3xl px-4 md:px-8 text-center mt-10 md:mt-20">
        <div className="text-xl md:text-2xl text-black font-medium mb-6 md:mb-10">
          "{testimonials[currentIndex].quote}"
        </div>
        <div className="mt-6 md:mt-8">
          <h3 className="text-base md:text-lg font-extrabold text-gray-900 mb-2">
            {testimonials[currentIndex].author}
          </h3>
          <p className="text-xs md:text-sm text-gray-600">
            <span className="font-bold">
              {testimonials[currentIndex].position}
            </span>
            <span> at </span>
            <span className="text-blue-500 font-bold">
              {testimonials[currentIndex].company}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
