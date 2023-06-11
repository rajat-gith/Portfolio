import React, { useContext, useEffect, useState } from "react";
import Photo from "../assets/Photo.JPG";
import "../styles/ComponentStyles.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { AppContext } from "../context/AppContext";

function HomeIntroComponent() {
  const { startShow, setStart } = useContext(AppContext);

  useEffect(() => {}, [startShow]);
  return (
    <motion.div
      initial={{ scale: 10 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, type: "spring" }}
      onAnimationComplete={setStart}
      className="HomeIntroComponent"
    >
      <p>
        Hii Its <span>Rajat</span>
      </p>
      {startShow ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: "1.5" }}
          className="imageDiv"
        >
          <img src={Photo} />
        </motion.div>
      ) : null}

      {startShow ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: "1.5" }}
          className="imageDiv"
        >
          <TypeAnimation
            sequence={[
              "A Web Developer",
              1000,
              "An Android Developer",
              1000,
              "An UI & UX Designer",
              1000,
              "A Robotics Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default HomeIntroComponent;
