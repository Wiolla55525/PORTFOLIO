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
              <small> 1 Year Working</small>
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> 4+ Personal Projects </small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            cupiditate earum deserunt? Ipsam a mollitia, excepturi cupiditate
            quis eos expedita? Eum perspiciatis mollitia omnis deserunt culpa
            sit amet nisi quo!
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};
