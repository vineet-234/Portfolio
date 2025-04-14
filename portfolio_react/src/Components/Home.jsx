// import React, { useRef } from 'react'
import pdf from "../pdf/indianconst.pdf";
import hero from "./Data/hero.json";
import aboutImg from "../assets/hero.avif";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Hello, I'm Vineet ", "I'm a Web Developer"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div
          className="fade-up"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1>
            <span ref={typedRef}></span>
          </h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-l" data-aos-duration="1000">
          <div className="img">
            <img
              className="h-xl w-xl"
              src={aboutImg}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

