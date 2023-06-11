import React from "react";
import "../styles/ComponentStyles.scss";

function EducationComponent() {
  return (
    <div className="EducationComponent">
      <p className="title">EDUCATION</p>
      <div className="btech">
        <p className="timeline">2020-Present</p>
        <p className="educationDescription">
          Bachelor' of Technology, Information Technology,
          <br />
          <span className="instiName">
            Veer Surendra Sai University of Technology Burla
          </span>
        </p>
      </div>
      <div className="intermediate">
        <p className="timeline">2020</p>
        <p className="educationDescription">
          Intermediate,
          <br />
          <span className="instiName">Kendriya Vidyalaya No.1 Bhubaneswar</span>
        </p>
      </div>
      <div className="matriculation">
        <p className="timeline">2018</p>
        <p className="educationDescription">
          Matriculation, <br />{" "}
          <span className="instiName">Kendriya Vidyalaya No.1 Bhubaneswar</span>
        </p>
      </div>
    </div>
  );
}

export default EducationComponent;
