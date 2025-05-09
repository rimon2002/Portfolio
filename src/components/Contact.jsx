import React from "react";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl text-white">Get in Touch</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-lg text-neutral-400">Dhaka</p>
        <p className="my-4 text-lg text-neutral-400">
          <a
            href="tel:+8801875895858"
            className="text-cyan-400 hover:underline"
          >
            +8801875895858
          </a>
        </p>
        <a
          href="mailto:raihanrimon853@gmail.com"
          className="text-lg text-cyan-400 hover:underline"
        >
          raihanrimon853@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
