import { Card } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";

function ContactComponent() {
  return (
    <div className="ContactComponent">
      <p className="title">LET's HAVE A TALK</p>
      <Card className="mail_Card">
        <div className="contact">
          <EmailIcon className="emailIcon" />
          <a href="mailto:rajatnayak1582002@gmail.com">Send email</a>
        </div>
        {/* <div className="copyright">
          <CopyrightIcon /> 2023
        </div> */}
      </Card>
    </div>
  );
}

export default ContactComponent;
