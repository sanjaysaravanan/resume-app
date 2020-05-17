import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";

import Resume from "../../Components/Resume/Resume";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2%",
      marginRight: "2%"
    }
  }
}));

export default function(props) {
  const classes = useStyles();

  const {
    params: { tab }
  } = useRouteMatch();

  function selectTab() {
    let selectedTab;

    switch (tab) {
      case "resume":
        selectedTab = <Resume />;
        break;
      case "projects":
        selectedTab = <Projects />;
        break;
      case "contact":
        selectedTab = <Contact />;
        break;
      default:
        selectedTab = <Typography variant="h4">No Found</Typography>;
    }

    return selectedTab;
  }

  return <div className={classes.root}>{selectTab()}</div>;
}
