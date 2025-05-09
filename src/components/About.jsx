import React from "react";
import { motion } from "framer-motion";
import port from "../assets/port.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* Image with Animation */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              className="rounded-lg w-96 h-96 object-cover shadow-lg"
              src={port}
              alt="about"
            />
          </motion.div>
        </div>

        {/* Text with Animation */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.p
            className="my-2 max-w-xl py-6 text-lg text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello! I'm Raihan Rimon, a passionate and results-driven MERN Stack
            Developer. I specialize in building dynamic, high-performance web
            applications using technologies like MongoDB, Express.js, React, and
            Node.js. I focus on clean, maintainable, and scalable code. I'm
            always eager to learn and grow in the world of web development.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
