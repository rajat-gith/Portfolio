import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/ComponentStyles.scss";

const TextReveal = ({ text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const rectangleVariants = {
    hidden: { x: 0 },
    visible: {
      x: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        margin: "20px 0",
        overflow: "hidden",
        "--borderColor": "#ff7b00",
        textAlign: "left",
        paddingLeft: "10px",
      }}
    >
      <span
        style={{
          fontSize: "7vw",
          paddingBottom: "10px",
          margin: "0",
          cursor: "default",
          fontFamily: "var(--font)",
          color: "var(--borderColor)",
          textAlign: "left",
          marginBottom: "10px",
        }}
      >
        {text}
      </span>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={rectangleVariants}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default TextReveal;
