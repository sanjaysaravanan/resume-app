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

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#E83556",
    height: "17vh",
    color: "#ffffff",
    width: "100%"
  },
  gridCont: {
    padding: theme.spacing(4),
    backgroundColor: "#E83556",
    width: "100%",
    height: "100%"
  },
  footerIconDiv: {
    borderRadius: "50%",
    height: 60,
    width: 60,
    backgroundColor: "#61D0D4",
    color: "#E83556",
    paddingTop: 12,
    float: "left",
    display: "block"
  },
  footerComponent: {
    paddingRight: 50
  },
  navigationLink: {
    "&:hover": {
      color: "#3f00fc",
      textDecoration: "none"
    }
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
              <div>9790889427</div>
              <div>7092799119</div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <div className={classes.footerIconDiv}>
              <MailOutlineOutlined fontSize="large" />
            </div>
            Contact
            <Typography variant="body2">sanjaysaravanan38@gmail.com</Typography>
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
                  href="https://www.facebook.com/sanjaysaravanan21"
                  target="_blank"
                >
                  <Facebook />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href="https://www.linkedin.com/in/sanjaysaravanan21/"
                  target="_blank"
                >
                  <LinkedIn />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href="https://github.com/sanjaysaravanan"
                  target="_blank"
                >
                  <GitHub />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href="https://twitter.com/sanjaysaravan21"
                  target="_blank"
                >
                  <Twitter />
                </Link>
                <Link
                  color="inherit"
                  className={classes.navigationLink}
                  href="https://www.instagram.com/sanjaysaravanan_21/"
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
