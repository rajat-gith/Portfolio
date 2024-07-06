import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/ComponentStyles.scss";

const Timeline = () => {
  const experiences = [
    {
      positon: "Software Developer",
      company: "NCompass Techstudio",
      description:
        "Working on the admin Dashboard of the company and team projects to make the UI more intuitive and increase the customer experience quality",
      timeline: "June 2024 - Present",
    },
    {
      positon: "Software Developer Intern",
      company: "NCompass Techstudio",
      description:
        "Working on the admin Dashboard of the company and team projects to make the UI more intuitive and increase the customer experience quality",
      timeline: "Jan 2024 - May 2024",
    },
    {
      positon: "Frontend Developer Intern",
      company: "Ig Drones Pvt.Ltd",
      description:
        "Working on the admin Dashboard of the company and team projects to make the UI more intuitive and increase the customer experience quality",
      timeline: "Aug 2023 - Nov 2023",
    },
    {
      positon: "Summer Intern",
      company: "Elimtus Evaluations Pvt.Ltd",
      description:
        "Developing complete frontend and backend of Interview Platform A multi-user video conferencing platform,along with collaborative code editor functionalities and other relevant functionalities",
      timeline: "May 2023- June 2023",
    },
    {
      positon: "Junior Backend Developer Intern",
      company: "Urbano InfoTech",
      description:
        "Experienced in backend development, specialized in Django Rest Framework APIs for various products. Committed to delivering high-quality and efficient solutions",
      timeline: "May 2022- June 2022",
    },
  ];

  return (
    <div className="ExperienceComponent">
      <p className="title">Experience</p>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={experience.timeline}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            contentStyle={{
              background: "rgba(255, 255, 255, 0.05)",
              color: "#fff",
            }}
          >
            <h3 className="vertical-timeline-element-title">
              {experience.positon}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {experience.company}
            </h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<WorkIcon />}
      />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
