import React from "react";
import Skills1 from "./Data/skills.json";
import '../index.css';
const Skills = () => {
  return (
    <div className="min-h-screen my-8.5" id="skills">
      {/* <div className=""> */}
      <div className="flex flex-col justify-center items-center gap-7 ">
        <h1 className="self-start">Skills</h1>

        <div className=" flex flex-wrap gap-20 items-center p-5 justify-center ">
          {Skills1.map((data) => (
            <div
              className=" gap-2 flex flex-col items-center justify-center transition-all duration-300 rounded-xl border-b-2 border-transparent hover:border-blue-400  "
              key={data.id}
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <img src={`/assests/${data.imageSrc}`} className="w-30" />
              <h3>{data.title}</h3>
            </div>
            // <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
