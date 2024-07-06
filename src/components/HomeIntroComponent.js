import React, { useContext, useEffect, useState } from "react";
import Photo from "../assets/Photo.JPG";
import "../styles/ComponentStyles.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

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
      <Link to="/blogs">
        <button class="blog-button">
          Explore Blogs
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </Link>

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
