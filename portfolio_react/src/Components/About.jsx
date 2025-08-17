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
        <div className="mb-39">
          <p className="text-xl font-sans mb-39">
            I am a skilled developer with expertise in HTML, CSS, JavaScript,
            React, SpringBoot and C++ (including Data Structures & Algorithms). I
            specialize in creating dynamic, responsive web applications and
            solving complex problems with efficient algorithms, always striving
            to build high-quality and optimized solutions
          </p>
           <div className="flex flex-col gap-1 mt-4 ml-6" >
            <span className="font-bold text-amber-200">Education</span>
            <div className="w-18 h-1 bg-amber-600"></div>
          </div>
          <div className="flex flex-col gap-2  ml-6">
            <br/>
            
            10th-85%
            <br />
            
            <br />
            12th-82%
            <br />
            
            <br/>
            B.E-7.4 GPA
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
