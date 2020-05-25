import React from "react";

import {
  Typography,
  makeStyles,
  Container,
  Divider,
  Grid,
  List
} from "@material-ui/core";
import { PriorityHighOutlined, Language } from "@material-ui/icons";

import Header from "../Header/HeaderComponent";
import { ResumeDetails } from "../../utils/Details";

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
                  <Typography variant="h5">
                    <strong>{detail.subTitle}</strong>
                  </Typography>
                  <Typography variant="h6">
                    <strong>{detail.where}</strong>
                  </Typography>
                  <Typography variant="h6">
                    <strong>{detail.year}</strong>
                  </Typography>
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
                details={ResumeDetails.professionalInfo}
              />
              <ResumeMain
                title="Work Experience"
                details={ResumeDetails.workExperience}
              />
              <ResumeMain title="Education" details={ResumeDetails.education} />
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
                    {ResumeDetails.skills.map((skill, i) => (
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
                    {ResumeDetails.languages.map((language, i) => (
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
