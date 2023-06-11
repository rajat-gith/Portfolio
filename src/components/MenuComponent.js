import React, { useEffect, useState } from "react";
import "../styles/ComponentStyles.scss";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

function MenuComponent() {
  const [menuCollapse, setMenuCollapse] = useState(true);

  return (
    <div className="MenuComponent">
      {menuCollapse ? (
        <motion.div className="menuButtons">
          <button
            id="menuButton"
            onClick={(e) => {
              setMenuCollapse(false);
            }}
          >
            Menu
          </button>
        </motion.div>
      ) : (
        <div className="menuButtons">
          <button
            id="menuButton"
            onClick={(e) => {
              setMenuCollapse(true);
            }}
          >
            Close
          </button>

          <Link to="/#LandingSection">
            <p>Home</p>
          </Link>

          <Link to="/#AboutSection">
            <p>About</p>
          </Link>

          <Link to="/#ProjectSection">
            <p>Projects</p>
          </Link>

          <Link to="/#ExperienceSection">
            <p>Experience</p>
          </Link>

          <Link to="/#ContactSection">
            <p>Let's Talk</p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default MenuComponent;
