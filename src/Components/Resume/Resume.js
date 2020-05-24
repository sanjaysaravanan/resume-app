import React from "react";

import Header from "../Header/HeaderComponent";
import {
  Typography,
  makeStyles,
  Container,
  Divider,
  Grid,
  List
} from "@material-ui/core";
import { PriorityHighOutlined, Language } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  resumeRoot: {
    textAlign: "start",
    padding: "24px 48px"
  },
  mainSection: {
    padding: "24px 0px"
  },
  rightSection: {
    padding: "24px 0px"
  },
  rightIconDiv: {
    borderRadius: "50%",
    height: 35,
    width: 35,
    backgroundColor: "#61D0D4",
    color: "#E83556",
    float: "left",
    textAlign: "center",
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rightTitle: {
    marginBottom: 12
  },
  skillMain: {
    margin: "12px 0px"
  },
  dividerColor: {
    backgroundColor: "#8f8f8f"
  },
  resumeMain: {
    margin: "24px 0px"
  },
  resumeMainTitle: {
    height: 130,
    width: 130,
    borderRadius: "50%",
    backgroundColor: "#E83556",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export default function() {
  const classes = useStyles();

  const skills = [
    "Flask - Intermediate",
    "MongoDB - Intermediate",
    "React-JS - Intermediate",
    "Spring MVC - Beginner",
    "Docker - Intermediate",
    "Git - Intermediate",
    "Jenkins(CI/CD) - Beginner",
    "AWS - Beginner",
    "GCP - Beginner"
  ];
  const languages = [
    "Python - Intermediate",
    "Javascript - Intermediate",
    "Java - Intermediate",
    "HTML/CSS - Intermediate"
  ];

  const professionalInfo = [
    {
      descrption:
        "Candidate with B.E in Electronics and Communication seeks a reference " +
        "Software Developer Role. One year of experience in Backend, frontend, and some " +
        "DevOps, Infrastructure Development practices. A fast learner with the ability to adapt " +
        "to different technologies."
    }
  ];

  const workExperience = [
    {
      subTitle: "Associate Software Engineer",
      year: "2019 - present",
      descrption:
        "I'm a paragraph. Click here to add your own text and edit me. " +
        "It’s easy. Just click “Edit Text” or double click me and you can start a" +
        "dding your own content and make changes to the font. Feel free to drag a" +
        "nd drop me anywhere you like on your page. I’m a great place for you to " +
        "write more. Tell a story about yourself."
    }
  ];

  const education = [
    {
      subTitle: "Undergraduate - B.E.",
      year: "2015 - 2019",
      descrption:
        "Electronics and Communication Engineering in Rajalakshmi Engineering College"
    }
  ];

  function CustomDivider() {
    return <Divider classes={{ root: classes.dividerColor }} />;
  }

  function ResumeMain(props) {
    return (
      <>
        <CustomDivider />
        <div className={classes.resumeMain}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <div className={classes.resumeMainTitle}>
                <Typography variant="h6">{props.title}</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              {props.details.map((detail, i) => (
                <div key={i}>
                  <Typography variant="h5">{detail.subTitle}</Typography>
                  <Typography variant="h5">{detail.year}</Typography>
                  <Typography variant="h6">{detail.descrption}</Typography>
                </div>
              ))}
            </Grid>
          </Grid>
        </div>
      </>
    );
  }

  return (
    <>
      <Header tab="resume" />
      <Container className={classes.resumeRoot} fixed>
        <Typography variant="h2">RESUME</Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
            <div className={classes.mainSection}>
              <ResumeMain
                title="Professional Info"
                details={professionalInfo}
              />
              <ResumeMain title="Work Experience" details={workExperience} />
              <ResumeMain title="Education" details={education} />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <div className={classes.rightSection}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
                  <div className={classes.rightTitle}>
                    <div className={classes.rightIconDiv}>
                      <PriorityHighOutlined />
                    </div>
                    <Typography variant="h4">Skills</Typography>
                  </div>
                  <CustomDivider />
                  <div className={classes.skillMain}>
                    {skills.map((skill, i) => (
                      <List disablePadding key={i}>
                        {skill}
                      </List>
                    ))}
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
                  <div className={classes.rightTitle}>
                    <div className={classes.rightIconDiv}>
                      <Language />
                    </div>
                    <Typography variant="h4">Languages</Typography>
                  </div>
                  <CustomDivider />
                  <div className={classes.skillMain}>
                    {languages.map((language, i) => (
                      <List disablePadding key={i}>
                        {language}
                      </List>
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
