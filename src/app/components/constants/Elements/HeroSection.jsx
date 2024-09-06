import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function HeroSection({ slides }) {
  return (
    <div className="relative w-full sm:h-[500px] h-[200px] overflow-hidden">
      <Carousel
        autoplay={true} 
        loop={true}       
        className="sm:h-[500px] h-[200px]" 
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="outlined"
            size="lg"
            color="white"
            onClick={handlePrev}
            className="absolute top-1/2 left-4 hidden transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60 transition"
          >
            <FaChevronLeft className="w-6 h-6" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="outlined"
            size="lg"
            color="white"
            onClick={handleNext}  
            className="absolute top-1/2 right-4 hidden transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-black hover:bg-opacity-60 transition"
          >
            <FaChevronRight className="w-6 h-6" />
          </IconButton>
        )}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full sm:h-[500px] h-[200px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col text-center items-center justify-center">
              <h1 className="text-white text-xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              {/* Adding stopPropagation to prevent button click from interfering with carousel */}
              <button
                className="bg-transparent border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition"
                onClick={(e) => e.stopPropagation()}
              >
                {slide.button}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
