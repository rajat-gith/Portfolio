import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/ComponentStyles.scss";
import TextReveal from "./TextReveal";

const Timeline = () => {
  const experiences = [
    {
      positon: "Software Developer",
      company: "NCompass Techstudio",
      description:
        "Working in Data Engineering Domain focusing on building ETL pipelines and converting business usecasses into data to improve performance.",
      timeline: "June 2024 - Present",
    },
    {
      positon: "Software Developer Intern",
      company: "NCompass Techstudio",
      description:
        "Designed and executed robust proof-of-concept solutions for public Q&A platforms and project management systems, enhancing user engagement by 40%.Implemented Redis Cache, compression, and query optimization techniques to boost performance by 50% in application development.",
      timeline: "Jan 2024 - May 2024",
    },
    {
      positon: "Frontend Developer Intern",
      company: "Ig Drones Pvt.Ltd",
      description:
        "Collaborated with cross-functional teams to revamp the front-end of the admin dashboard (IGOne Project), leveraging cutting-edge development techniques resulting in a 30% increase in user engagement.",
      timeline: "Aug 2023 - Nov 2023",
    },
    {
      positon: "Summer Intern",
      company: "Elimtus Evaluations Pvt.Ltd",
      description:
        "Deployed a multi-user video conferencing system to enable real-time interviews. Integrated chat functionality, Collaborative Code Editor, and screen sharing capabilities. Improved performance by 50% through the adoption of Media Server for SFU Architecture, using Amazon Web Services (AWS) as the app' host. Tech stack: Development of MERN Stack",
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
      <TextReveal text={"Experience"}></TextReveal>
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
