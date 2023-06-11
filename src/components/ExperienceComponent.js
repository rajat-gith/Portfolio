import React from "react";
import "../styles/ComponentStyles.scss";
import data from "../assets/json/Data.json";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Card, Grid } from "@mui/material";

function ExperienceComponent() {
  console.log(data);
  return (
    <div className="ExperienceComponent">
      <p className="title">Experience</p>
      <div className="experiences">
        <Grid
          container
          className="professional_experience"
          lg={12}
          spacing="12"
        >
          {data.prof_experience.map((key) => (
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <AnimationOnScroll animateIn="animate__zoomIn" duration={2}>
                <Card className="experience_card">
                  <p className="position_name">{key.positon}</p>
                  <div className="orgDetails">
                    <p className="org">{key.company}</p>
                    <p className="duration">{key.timeline}</p>
                  </div>
                  <p className="desc">{key.description}</p>
                </Card>
              </AnimationOnScroll>
            </Grid>
          ))}
        </Grid>
        <div className="volunter_experience">
          <p className="title">Volunteering ...</p>
          <Grid
            container
            className="professional_experience"
            lg={12}
            spacing="12"
          >
            {data.vol_experience.map((key) => (
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                <AnimationOnScroll
                  animateIn="animate__zoomIn"
                  duration={2}
                >
                  <Card className="experience_card">
                    <p className="position_name">{key.positon}</p>
                    <div className="orgDetails">
                      <p className="org">{key.company}</p>
                      <p className="duration">{key.timeline}</p>
                    </div>
                    <p className="desc">{key.description}</p>
                  </Card>
                </AnimationOnScroll>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
