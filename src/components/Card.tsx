import React from "react";
import { Card as MuiCard, CardContent } from "@mui/material";

import CardHeader, { CardHeaderProps } from "./CardHeader";

interface CardProps extends CardHeaderProps {
	content: React.ReactElement;
}

function Card({ content, ...headerProps }: CardProps): React.ReactElement {
	return (
		<MuiCard elevation={5}>
			<CardHeader {...headerProps} />
			<CardContent>{content}</CardContent>
		</MuiCard>
	);
}

export default Card;
