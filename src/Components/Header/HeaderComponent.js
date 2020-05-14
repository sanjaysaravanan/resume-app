import React, { useState } from "react";
import {
  Container,
  Typography,
  Link,
  Toolbar,
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as LinkRo } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "start"
  },
  navTabs: {
    display: "inline",
    margin: 30
  },
  navigationLink: {
    "&:hover": {
      color: theme.palette.primary.light,
      textDecoration: "none"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = useState(props.tab);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleClick = tabName => {
    setSelectedTab(tabName);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Link
          to="/"
          component={LinkRo}
          className={classes.navigationLink}
          color={selectedTab === "home" ? "primary" : "textPrimary"}
          onClick={() => handleClick("home")}
        >
          <Typography variant="h5">Home</Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link
          to="/resume"
          component={LinkRo}
          className={classes.navigationLink}
          color={selectedTab === "resume" ? "primary" : "textPrimary"}
          onClick={() => handleClick("resume")}
        >
          <Typography variant="h5">Resume</Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link
          to="/projects"
          component={LinkRo}
          className={classes.navigationLink}
          color={selectedTab === "projects" ? "primary" : "textPrimary"}
          onClick={() => handleClick("projects")}
        >
          <Typography variant="h5">Projects</Typography>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Link
          to="/contact"
          component={LinkRo}
          className={classes.navigationLink}
          color={selectedTab === "contact" ? "primary" : "textPrimary"}
          onClick={() => handleClick("contact")}
        >
          <Typography variant="h5">Contact</Typography>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Container className={classes.root} fixed>
      <Toolbar>
        <div>
          <Typography variant="h3">Sanjay Saravanan</Typography>
          <Typography variant="h5">Full Stack Developer</Typography>
        </div>
        <div className={classes.sectionDesktop}>
          <div className={classes.navTabs}>
            <Link
              to="/"
              component={LinkRo}
              className={classes.navigationLink}
              color={selectedTab === "home" ? "primary" : "textPrimary"}
              onClick={() => handleClick("home")}
            >
              <Typography variant="h5">Home</Typography>
            </Link>
          </div>
          <div className={classes.navTabs}>
            <Link
              to="/resume"
              component={LinkRo}
              className={classes.navigationLink}
              color={selectedTab === "resume" ? "primary" : "textPrimary"}
              onClick={() => handleClick("resume")}
            >
              <Typography variant="h5">Resume</Typography>
            </Link>
          </div>
          <div className={classes.navTabs}>
            <Link
              to="/projects"
              component={LinkRo}
              className={classes.navigationLink}
              color={selectedTab === "projects" ? "primary" : "textPrimary"}
              onClick={() => handleClick("projects")}
            >
              <Typography variant="h5">Projects</Typography>
            </Link>
          </div>
          <div className={classes.navTabs}>
            <Link
              to="/contact"
              component={LinkRo}
              className={classes.navigationLink}
              color={selectedTab === "contact" ? "primary" : "textPrimary"}
              onClick={() => handleClick("contact")}
            >
              <Typography variant="h5">Contact</Typography>
            </Link>
          </div>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
    </Container>
  );
}
