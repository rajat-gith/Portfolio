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
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import EducationComponent from "../components/EducationComponent";

function HomePage() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleResumeButton = () => {
    window.open(
      "https://drive.google.com/file/d/1uzwM6Yb9G5ZKKfvT_QiAAE6lRRsfpOq0/view?usp=sharing"
    );
  };

  const { startShow, setStart } = useContext(AppContext);

  return (
    <div className="HomePage">
      <div>
        <div className="resume">
          <div>
            <button class="resumeButton" onClick={handleResumeButton}>
              Resume
              <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                <path
                  clip-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="menu">
          <div>
            <MenuComponent />
          </div>
        </div>
        <div id="LandingSection">
          <HomeIntroComponent />
        </div>
        <div id="AboutSection">
          <AboutComponent />
        </div>
        <div id="EducationSection">
          <EducationComponent />
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
    </div>
  );
}

export default HomePage;
