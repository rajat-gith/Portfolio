import React from "react";
import EducationComponent from "./EducationComponent";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import leetcodeIcon from "../assets/leetcode-custom.svg";
import "../styles/ComponentStyles.scss";

function AboutComponent() {
  return (
    <div className="AboutComponent">
      <p className="title">About Me</p>
      <p className="aboutContent">
        Hey, I am Rajat Kumar Nayak based out of Bhubabaneswar,Odisha. <br />{" "}
        <br />I build
        <span className="highlights"> RESPONSIVE,INTUITIVE,SCALABLE </span>
        projects. I also like to code in C++, Python and fonder of Robotics and
        Arduino. I like to do Graphics Designing and Gaming in my free time.
      </p>

      <div className="SocialIcons">
        <GitHubIcon
          className="icon"
          onClick={() => {
            window.open("https://github.com/rajat-gith", "_blank");
          }}
        />
        <TwitterIcon
          className="icon"
          onClick={() => {
            window.open("https://twitter.com/its_rajat_dev", "_blank");
          }}
        />
        <LinkedInIcon
          className="icon"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/rajat-kumar-nayak-a4aa84204/",
              "_blank"
            );
          }}
        />

        <img
          className="leetCodeicon"
          src={leetcodeIcon}
          onClick={() => {
            window.open("https://leetcode.com/rajatnayak1582002/", "_blank");
          }}
          alt=""
          srcset=""
        />
      </div>
      <EducationComponent />
    </div>
  );
}

export default AboutComponent;
