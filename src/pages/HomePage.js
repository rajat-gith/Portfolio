import React, { useState, useEffect, useContext } from "react";
import "../styles/HomePageStyles.scss";
import HomeIntroComponent from "../components/HomeIntroComponent";
import MenuComponent from "../components/MenuComponent";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import ThreeModel from "../components/ThreeModel";
import AboutComponent from "../components/AboutComponent";
import ProjectComponent from "../components/ProjectComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ContactComponent from "../components/ContactComponent";

function HomePage() {

  const handleResumeButton = () => {
    window.open(
      "https://drive.google.com/file/d/11QIq9PfuVHkIjuFq-dYtzmWCK62WC-IK/view?usp=sharing"
    );
  };

  const { startShow, setStart } = useContext(AppContext);

  return (
    <div className="HomePage">
      <div className="resume">
        {startShow ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, type: "easein" }}
          >
            <button id="resumeButton" onClick={handleResumeButton}>
              Resume
            </button>
          </motion.div>
        ) : null}
      </div>
      <div className="menu">
        {startShow ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "easein" }}
          >
            <MenuComponent />
          </motion.div>
        ) : null}
      </div>
      <div id="LandingSection">
        <HomeIntroComponent />
      </div>
      <div id="AboutSection">
        <AboutComponent />
      </div>
      <div id="ProjectSection">
        <ProjectComponent />
      </div>
      <div id="ExperienceSection">
        <ExperienceComponent />
      </div>

      <div id="ContactSection">
        <ContactComponent />
      </div>
    </div>
  );
}

export default HomePage;
