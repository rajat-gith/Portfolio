import React from "react";
import "../styles/ComponentStyles.scss";
import data from "../assets/json/Data.json";

function ExperienceComponent() {
  console.log(data);
  return (
    <div className="ExperienceComponent">
      <p className="title">Experience</p>
      <div className="experiences">
        <div className="professional_experience">
          {data.prof_experience.map((key) => (
            <div className="experience_card">
              <p className="position_name">{key.positon}</p>
              <p className="org">{key.company}</p>
              <p className="desc">{key.description}</p>
            </div>
          ))}
        </div>
        <div className="volunter_experience">
          {data.vol_experience.map((key) => (
            <div className="experience_card">
              <p className="position_name">{key.positon}</p>
              <p className="org">{key.company}</p>
              <p className="desc">{key.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
