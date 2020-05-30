import React from "react";

import Header from "../Header/HeaderComponent";
import {
  Typography,
  Container,
  makeStyles,
  Divider,
  Grid,
  Link
} from "@material-ui/core";
import { Link as LinkRo } from "react-router-dom";
import { projects } from "../../utils/Details";
import Slider from "../Slider/Slider";

const useStyles = makeStyles(theme => ({
  projectsRoot: {
    textAlign: "start",
    padding: "24px 48px"
  },
  projectMainTitle: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    backgroundColor: "#61D0D4",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 0px 24px 0px"
  },
  projectSlides: {
    height: 300,
    [theme.breakpoints.down("sm")]: {
      height: 200
    }
  },
  projectTitle: {
    margin: "12px 0px"
  },
  projectMain: {
    margin: "24px 0px"
  },
  dividerColor: {
    backgroundColor: "#8f8f8f"
  },
  discussDiv: {
    margin: "24px 0px"
  },
  talkLine: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },
  talkIcon: {
    height: 60,
    width: 60,
    borderRadius: "50%",
    backgroundColor: "#61D0D4",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    float: "right",
    [theme.breakpoints.down("sm")]: {
      height: 80,
      width: 80
    }
  }
}));

export default function() {
  const classes = useStyles();

  // Custom Divider
  function CustomDivider() {
    return <Divider classes={{ root: classes.dividerColor }} />;
  }

  function ProjectsMain(props) {
    return (
      <>
        <CustomDivider />
        <div className={classes.projectMain}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.projectSlides}>
                <Slider slides={props.detail.images} />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className={classes.projectMainTitle}>
                {`Project | ${props.i}`}
              </div>
              <CustomDivider />
              <div className={classes.projectTitle}>
                <Typography variant="h5">{props.detail.title}</Typography>
                <strong>Technologies:</strong>{" "}
                {props.detail.technologies.join(", ")}
              </div>
              {props.detail.description}
            </Grid>
          </Grid>
        </div>
      </>
    );
  }

  return (
    <>
      <Header tab="projects" />
      <Container className={classes.projectsRoot} fixed>
        <Typography variant="h2">LATEST PROJECTS</Typography>
        {projects.map((project, i) => (
          <ProjectsMain detail={project} i={i + 1} key={i} />
        ))}
        <CustomDivider />
        <div className={classes.discussDiv}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
              <div className={classes.talkLine}>
                <Typography variant="h6">
                  To see more or discuss possible work let's talk >>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
              <Link to="/contact" component={LinkRo}>
                <div className={classes.talkIcon}>Let's Talk</div>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
