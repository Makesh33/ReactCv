import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface LoaderProps {
	message: string;
}

function Loader(props: LoaderProps): React.ReactElement {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			direction="column"
			spacing={3}
			sx={{
				width: "100%",
				height: "100%",
				backgroundColor: "#e8e8e8",
			}}
		>
			<Grid item>
				<Typography>{props.message}</Typography>
			</Grid>
			<Grid item>
				<CircularProgress />
			</Grid>
		</Grid>
	);
}

export default Loader;
