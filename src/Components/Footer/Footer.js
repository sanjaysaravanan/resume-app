import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography, Link } from "@material-ui/core";
import {
  CallOutlined,
  MailOutlineOutlined,
  AddOutlined,
  CopyrightOutlined,
  Instagram,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub
} from "@material-ui/icons";

import { links, contacts } from "../../utils/Details";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#E83556",
    height: "100%",
    color: "#ffffff",
    width: "100%"
  },
  gridCont: {
    padding: theme.spacing(4),
    backgroundColor: "#E83556",
    width: "100%"
  },
  footerIconDiv: {
    borderRadius: "50%",
    height: 60,
    width: 60,
    backgroundColor: "#61D0D4",
    color: "#E83556",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    float: "left"
  },
  footerComponent: {
    paddingRight: 50
  },
  navigationLink: {
    "&:hover": {
      color: "#3f00fc",
      textDecoration: "none"
    }
  },
  hackerrankIconDiv: {
    height: 24,
    width: 24
  }
}));

const Copyright = () => {
  return (
    <Typography variant="body2" align="center">
      <Link color="inherit" href="#">
        sanjaysaravanan
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default function() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.gridCont} fixed>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.footerIconDiv}>
              <CallOutlined fontSize="large" />
            </div>
            <div className={classes.footerComponent}>
              Call
              <div>{contacts.phoneOne}</div>
              <div>{contacts.phoneTwo}</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.footerIconDiv}>
              <MailOutlineOutlined fontSize="large" />
            </div>
            Contact
            <Typography variant="body2">{contacts.mailId}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.footerIconDiv}>
              <AddOutlined fontSize="large" />
            </div>
            <div className={classes.footerComponent}>
              Follow me
              <div>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href={links.facebook}
                  target="_blank"
                >
                  <Facebook />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href={links.linkedIn}
                  target="_blank"
                >
                  <LinkedIn />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href={links.github}
                  target="_blank"
                >
                  <GitHub />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href={links.twitter}
                  target="_blank"
                >
                  <Twitter />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href={links.instagram}
                  target="_blank"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.footerIconDiv}>
              <CopyrightOutlined fontSize="large" />
            </div>
            <div className={classes.footerComponent}>
              Copyrights
              {Copyright()}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
