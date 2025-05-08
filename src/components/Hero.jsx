import React from "react";
import dp from "../assets/dp.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Raihan Rimon
            </h1>
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-4xl tracking-tight text-transparent">
              MERN Stack Developer
            </span>
            <p className="my-4 max-w-3xl mx-auto py-6 font-light tracking-tight text-center text-lg leading-relaxed">
              Hello! I'm Raihan Rimon, a passionate and results-driven MERN
              Stack Developer with a strong foundation in building dynamic,
              high-performance web applications. I specialize in MongoDB,
              Express.js, React, and Node.js (MERN) technologies, and I have a
              deep understanding of full-stack development. My focus is on
              creating clean, maintainable, and scalable code, and I am always
              eager to learn new technologies and techniques to improve my
              development skills. From front-end interfaces to back-end
              architecture, I strive to provide seamless user experiences and
              high-quality solutions.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img
            src={dp}
            alt="Raihan Rimon"
            className="w-64 h-64 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
