import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-icon"
         data-aos="flip-left"
         data-aos-delay="200"
         data-aos-duration="1000">
          <a href="https://github.com/vineet-234" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/vineet-nh-3a6ab4338/" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="mailto:vineethiremath78@gmail.com" className="items">
            <MdEmail className="icons" />
          </a>
          <a href="https://x.com/?lang=en-in" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
