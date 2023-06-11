import React from "react";
import EducationComponent from "./EducationComponent";

function AboutComponent() {
  return (
    <div className="AboutComponent">
      <p className="title">ABOUT</p>
      <p className="aboutContent">
        Hey, I am Rajat Kumar Nayak. An Full Stack Web Developer,Android App
        Developer ,UI&UX Designer. <br /> <br />I build
        <span className="highlights"> RESPONSIVE,INTUITIVE,SCALABLE </span>
        projects. I also like to code in C++, Python and fonder of Robotics and
        Arduino. I like to do Graphics Designing and Gaming in my free time.
      </p>

      <EducationComponent />
    </div>
  );
}

export default AboutComponent;
