import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import "../styles/ComponentStyles.scss";

const EducationComponent = () => {
  return (
    <div className="EducationComponent">
      <p className="title">Education</p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Technology, Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Veer Surendra Sai University of Technology, Burla
          </h4>
          <p>Currently pursuing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">Intermediate</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya No.1, Bhubaneswar
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{
            background: "rgba(255, 255, 255, 0.05)",
            color: "#fff",
          }}
        >
          <h3 className="vertical-timeline-element-title">Matriculation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kendriya Vidyalaya No.1, Bhubaneswar
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default EducationComponent;
