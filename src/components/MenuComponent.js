import React, { useEffect, useState } from "react";
import "../styles/ComponentStyles.scss";
import { motion } from "framer-motion";

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
          <p>Home</p>
          <p>About</p>
          <p>Experience</p>
          <p>MY PROJECTS</p>
          <p>LET'S TALK</p>
        </div>
      )}
    </div>
  );
}

export default MenuComponent;
