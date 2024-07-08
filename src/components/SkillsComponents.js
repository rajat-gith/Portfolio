import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../styles/ComponentStyles.scss"; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BasicGrid({ skills }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className="skills_container">
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={6} md={4} key={index}>
            <Item className="skill_card">{skill}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

BasicGrid.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function SkillComponent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const programmingAndDevelopment = [
    "Python",
    "C++",
    "Javascript",
    "Kotlin",
    "Android",
    "React",
    "Django Rest Framework",
    "Node",
    "Express",
    "Flask",
    "PySpark",
    "Nest",
    "HTML",
    "CSS",
    "ROS",
    "Arduino",
    
  ];

  const dataAndDatabases = [
    "SQL",
    "Mongo",
    "Postgres",
    "Airflow",
    "Firebase",
  ];

  const devOpsDesignAndTools = [
    "AWS",
    "Linux",
    "Figma",
    "Docker",
    "Illustrator",
    "Photoshop",
    "Git"
  ];

  return (
    <div className="SkillComponent">
      <p className="title">Skills</p>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="skills tabs">
            <Tab label="Development" {...a11yProps(0)} />
            <Tab label="Databases" {...a11yProps(1)} />
            <Tab label="Tools" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BasicGrid skills={programmingAndDevelopment} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <BasicGrid skills={dataAndDatabases} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <BasicGrid skills={devOpsDesignAndTools} />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
