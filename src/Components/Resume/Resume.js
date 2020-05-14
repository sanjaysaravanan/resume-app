import React from "react";

import Header from "../Header/HeaderComponent";
import { Typography } from "@material-ui/core";

export default function() {
	return (
		<>
			<Header tab="resume" />
			<Typography variant="h4">Resume</Typography>
		</>
	);
}
