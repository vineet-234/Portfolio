import React, { useState } from "react";
import aboutImg from "../assets/me-in-suit.jpg";
const About = () => {
  const [education, seteducation] = useState(false);
  return (
    <div className="min-h-[100vh] flex flex-col gap-4" id="about">
      <div className=" pt-10 text-4xl font-semibold">About Me</div>
      <div
        className="flex gap-4 justify-between flex-col md:flex-row "
        data-aos="zoom-in"
        data-aos-duration="1400"
      >
        <img src={aboutImg} className="h-[600px] rounded-4xl" />
        <div>
          <p>
            I am a skilled developer with expertise in HTML, CSS, JavaScript,
            React, and C++ (including Data Structures & Algorithms). I
            specialize in creating dynamic, responsive web applications and
            solving complex problems with efficient algorithms, always striving
            to build high-quality and optimized solutions
          </p>
          <div className="flex gap-4 mt-4">
            <button className="font-bold text-amber-200" onClick={() => seteducation(false)}> Certification</button>
            <button className="font-bold text-amber-200" onClick={() => seteducation(true)}>Education</button>
          </div>
          {education ? (
            <div className="flex flex-col gap-2 ">
              <div className="w-19 h-1 bg-amber-900 ml-26 "></div>
              10th-85%
              <br />
              12th-82%
            </div>
          ) : (
            <div>
              <div className="w-19 h-1 bg-amber-900 ml-2"></div>
              have to fill
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
