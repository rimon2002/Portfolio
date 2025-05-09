import React from "react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
      <h1 className="my-20 text-center text-4xl text-white">
        Certifications & Courses
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-start">
        <div className="w-full lg:w-1/4 mb-4">
          <p className="mb-2 text-sm text-neutral-400">Course</p>
        </div>
        <div className="w-full lg:w-3/4 mb-4">
          <h6 className="mb-2 font-semibold text-white">
            • Full Stack Web Development - [Institution: Learn With Fiz].
          </h6>
        </div>
        <div className="w-full lg:w-1/4 mb-4">
          <p className="mb-2 text-sm text-neutral-400">
            Certificate of Appreciation – UCICS 2025
          </p>
        </div>
        <div className="w-full lg:w-3/4 mb-4">
          <h6 className="mb-2 font-semibold text-white">
            • Awarded By: Undergraduate Conference on Intelligent Computing and
            Systems (UCICS 2025) • Paper Title: Predictive Insights into
            Depression and Suicide Among Bangladeshi Youth. Paperid:100. Venue:
            Varendra University, Rajshahi. Date: February 2025
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Experience;
