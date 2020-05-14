import React from "react";

import Header from "../Header/HeaderComponent";
import { Container, Typography, Link } from "@material-ui/core";
import { Link as LinkRo } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ProfilePic from "../../assets/images/sanjay.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2%",
      marginRight: "2%"
    }
  },
  image: {
    borderRadius: "50%",
    height: "100%",
    width: "100%"
  },
  leftSection: {
    float: "left",
    display: "block",
    width: "35%",
    height: "100%",
    marginTop: "60px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 0,
      marginLeft: 0,
      marginBottom: 20
    }
  },
  mainSection: {
    float: "left",
    width: `calc(100% - 35% - 50px)`,
    height: "100%",
    marginTop: "80px",
    marginLeft: "50px",
    marginBottom: "60px",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 50,
      marginLeft: 20
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block"
    }
  },
  sectionMobile: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  mainSectionNavs: {
    marginTop: 20
  },
  resumeButton: {
    float: "left",
    backgroundColor: "#E83556",
    borderRadius: "50%",
    width: 130,
    height: 130,
    paddingTop: 55,
    marginLeft: 20,
    color: "#ffffff",
    "&:hover": {
      filter: `brightness(65%)`
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: 0,
      "&:hover": {
        filter: `brightness(65%)`
      }
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: 0,
      paddingTop: 40,
      "&:hover": {
        filter: `brightness(65%)`
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      width: 80,
      height: 80,
      paddingTop: 20,
      "&:hover": {
        filter: `brightness(65%)`
      }
    }
  },
  workButton: {
    float: "left",
    backgroundColor: "#61D0D4",
    borderRadius: "50%",
    width: 130,
    height: 130,
    paddingTop: 55,
    marginLeft: 20,
    color: "#ffffff",
    "&:hover": {
      filter: `brightness(65%)`
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: 10,
      "&:hover": {
        filter: `brightness(65%)`
      }
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: 10,
      paddingTop: 40,
      "&:hover": {
        filter: `brightness(65%)`
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
      width: 80,
      height: 80,
      paddingTop: 20,
      "&:hover": {
        filter: `brightness(65%)`
      }
    }
  },
  skillButton: {
    float: "left",
    backgroundColor: "#D1C926",
    borderRadius: "50%",
    width: 130,
    height: 130,
    paddingTop: 55,
    marginLeft: 20,
    color: "#ffffff",
    "&:hover": {
      filter: `brightness(65%)`
    },
    [theme.breakpoints.only("md")]: {
      marginLeft: 10,
      "&:hover": {
        filter: `brightness(65%)`
      }
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: 10,
      paddingTop: 40,
      "&:hover": {
        filter: `brightness(65%)`
      }
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 10,
      width: 80,
      height: 80,
      paddingTop: 20,
      "&:hover": {
        filter: `brightness(65%)`
      }
    }
  },
  textArea: {
    textAlign: "left",
    width: "100%"
  }
}));

export default function() {
  const classes = useStyles();

  const description_text =
    "Coming to my strengths and weaknesses, my strengths are. I am a good learner, " +
    "innovative, I have positive attitude and committed to my work. My weakness is" +
    " procrastination and I am a bit selfish too. My ultimate goal is to do work " +
    "what I like to do and your company can provide me that opportunity" +
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just" +
    " click “Edit Text” or double click me and you can start adding your own content " +
    "and make changes to the font. Feel free to drag and drop me anywhere you like on " +
    "your page. I’m a great place for you to write more. Tell a story and let your users " +
    "get to know you";

  return (
    <div className={classes.root}>
      <Header tab="home" />
      <Container fixed>
        <div className={classes.sectionDesktop}>
          <div className={classes.leftSection}>
            <img
              className={classes.image}
              src={ProfilePic}
              alt="Sanjay Saravanan"
            />
          </div>
          <div className={classes.mainSection}>
            <Typography variant="h1">Hello,</Typography>
            <Typography variant="h3">a bit about me:</Typography>
            <div className={classes.mainSectionNavs}>
              <Link
                to="/resume"
                component={LinkRo}
                className={classes.navigationLink}
              >
                <div className={classes.resumeButton}>
                  <Typography variant="body2" align="center">
                    MY RESUME
                  </Typography>
                </div>
              </Link>
              <Link
                to="/projects"
                component={LinkRo}
                className={classes.navigationLink}
              >
                <div className={classes.workButton}>
                  <Typography variant="body2" align="center">
                    MY WORK
                  </Typography>
                </div>
              </Link>
              <Link
                to="/contact"
                component={LinkRo}
                className={classes.navigationLink}
              >
                <div className={classes.skillButton}>
                  <Typography variant="body2" align="center">
                    MY SKILLS
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.sectionMobile}>
          <div className={classes.mainSection}>
            <Typography variant="h2">Hello,</Typography>
            <Typography variant="h5">a bit about me:</Typography>
            <div className={classes.mainSectionNavs}>
              <Link
                to="/resume"
                component={LinkRo}
                className={classes.navigationLink}
              >
                <div className={classes.resumeButton}>
                  <Typography variant="body2" align="center">
                    MY
                  </Typography>
                  <Typography variant="body2" align="center">
                    RESUME
                  </Typography>
                </div>
              </Link>
              <Link
                to="/projects"
                component={LinkRo}
                className={classes.navigationLink}
              >
                <div className={classes.workButton}>
                  <Typography variant="body2" align="center">
                    MY
                  </Typography>
                  <Typography variant="body2" align="center">
                    WORK
                  </Typography>
                </div>
              </Link>
              <Link
                to="/contact"
                component={LinkRo}
                className={classes.navigationLink}
              >
                <div className={classes.skillButton}>
                  <Typography variant="body2" align="center">
                    MY
                  </Typography>
                  <Typography variant="body2" align="center">
                    SKILLS
                  </Typography>
                </div>
              </Link>
            </div>
          </div>
          <div className={classes.leftSection}>
            <img
              className={classes.image}
              src={ProfilePic}
              alt="Sanjay Saravanan"
            />
          </div>
        </div>
        <div className={classes.textArea}>
          <Typography variant="h6">{description_text}</Typography>
        </div>
      </Container>
    </div>
  );
}
