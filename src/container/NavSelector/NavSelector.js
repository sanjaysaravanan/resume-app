import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Typography } from "@material-ui/core";

import Resume from "../../Components/Resume/Resume";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

export default function(props) {
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

  return selectTab();
}
