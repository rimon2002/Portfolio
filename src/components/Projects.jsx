import React from "react";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <h1 className="my-20 text-center text-4xl text-white">Projects</h1>
      <div className="max-w-4xl mx-auto px-6">
        {/* Project 1: UNIHIVE */}
        <h2 className="text-2xl font-semibold text-white">UNIHIVE</h2>
        <p className="text-lg text-neutral-400 mb-4">
          A Unified Social Platform for University Communities
        </p>
        <p className="text-neutral-300 mb-4">
          <strong>Tools and Technologies:</strong>
          <br />
          Frontend: React, JavaScript, Chakra UI. <br />
          Backend: Node, Express. <br />
          Database: MongoDB. <br />
          Real-time Communication: Socket.io. <br />
          Editor: VS Code.
        </p>

        {/* Project Images */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <img
            src={p1}
            alt="projectimage"
            className="w-full max-w-sm rounded-lg shadow-md object-cover h-auto"
          />
          <img
            src={p2}
            alt="projectimage"
            className="w-full max-w-sm rounded-lg shadow-md object-cover h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
