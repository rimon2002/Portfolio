import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl text-white">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon */}
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Redis Icon */}
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        {/* PostgreSQL Icon */}
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        {/* Node.js Icon */}
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        {/* MongoDB Icon */}
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        {/* Next.js Icon */}
        <motion.div
          className="rounded-2xl border-2 border-neutral-600 p-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
