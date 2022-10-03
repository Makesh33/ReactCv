import React from "react";
import { CardHeader as MuiCardHeader, Chip } from "@mui/material";
import OverflowableTypography from "./OverflowableTypography";

export interface CardHeaderProps {
	title: string;
	chip?: string;
}

function CardHeader({ ...props }: CardHeaderProps): React.ReactElement {
	return (
		<MuiCardHeader
			title={
				<OverflowableTypography variant="h6" color="common.white">
					{props.title}
				</OverflowableTypography>
			}
			action={props.chip && <Chip key={props.chip} label={props.chip} sx={{ backgroundColor: "whitesmoke" }} />}
			sx={{
				display: "flex",
				padding: 4,
				backgroundColor: "primary.main",
			}}
		/>
	);
}

export default CardHeader;
