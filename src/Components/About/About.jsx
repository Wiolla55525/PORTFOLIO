import React from "react";
import "./about.css";
import photo from "../../Assets/photo.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <section id="about">
      <h5> Get to know </h5>
      <h2> About me </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={photo} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small> 1 Year Learning</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 4+ Personal Projects </small>
            </div>
          </div>
          <p>
          A goal-oriented Entry Level Frontend Developer with 
          experience in HTML, CSS, JavaScript, React 
          who wants to use technical skills and creativity to develop 
          interacting user experiences and grow in a professional career. 
          Looking to use effective debugging, code optimization, and project 
          collaboration to create applications that exceed user expectations.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
