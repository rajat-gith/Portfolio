import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function InfoComponent() {
  const animationVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.4,
        duration: 1.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AppContainer>
      <Wrapper>
        <Line className="singleLine">
          <Text>
            D<span>E</span>V<span>E</span>L<span>O</span>PER,
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            D<span>E</span>SIG<span>N</span>ER,
          </Text>
        </Line>
        <Line className="singleLine">
          <Text>
            <span>R</span>EADER,
          </Text>
        </Line>
      </Wrapper>
    </AppContainer>
  );
}

export default InfoComponent;

const AppContainer = styled.div`
  width: 50vw;
  height: 50vh;
  color: #000000;
  background: #1d1d1f;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 90vw;
    height: 50vh;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 7vw;
  position: relative;
  overflow: hidden;

  &:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
  }
  &:nth-of-type(3) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 600px) {
    height: 13vw;
  }
`;

const Text = styled(motion.div)`
  position: absolute;
  font-size: 8vw;
  color: #fff;
  line-height: 8vw;

  span {
    font-family: "Major Mono Display", monospace;
    color: rgb(150, 149, 149);
    font-size: 8vw;
  }

  @media (max-width: 600px) {
    font-size: 13vw;
    line-height: 13vw;

    span {
      font-size: 13vw;
    }
  }
`;
