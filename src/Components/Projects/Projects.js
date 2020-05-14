import React from "react";

import Header from "../Header/HeaderComponent";
import { Typography } from "@material-ui/core";

export default function() {
	return (
		<>
			<Header tab="projects" />
			<Typography variant="h4">Projects</Typography>
		</>
	);
}
