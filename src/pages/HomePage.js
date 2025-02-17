import React, { useState, useEffect, useContext } from "react";
import "../styles/HomePageStyles.scss";
import HomeIntroComponent from "../components/HomeIntroComponent";
import MenuComponent from "../components/MenuComponent";
import AboutComponent from "../components/AboutComponent";
import ProjectComponent from "../components/ProjectComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import ContactComponent from "../components/ContactComponent";
import EducationComponent from "../components/EducationComponent";
import SkillComponent from "../components/SkillsComponents";

function HomePage() {
  const [isLoading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleResumeButton = () => {
    window.open(
      "https://drive.google.com/file/d/16QaicgGR1lFwK0CsFRym90LihyZUpyLp/view?usp=sharing"
    );
  };

  return (
    <div className="HomePage">
      <div>
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
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
        </div>

        <div id="LandingSection">
          <HomeIntroComponent />
        </div>

        <div id="AboutSection">
          <AboutComponent />
        </div>
        <div id="ExperienceSection">
          <ExperienceComponent />
        </div>
        <div id="ProjectSection">
          <ProjectComponent />
        </div>
        <div id="SkillsSection">
          <SkillComponent />
        </div>
        <div id="EducationSection">
          <EducationComponent />
        </div>

        <div id="ContactSection">
          <ContactComponent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
