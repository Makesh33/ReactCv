import React, { useState } from "react";
import { Box, Card as MuiCard, CardContent as MuiCardContent, Collapse, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

import CardHeader, { CardHeaderProps } from "./CardHeader";

export type CardContent = {
	content: React.ReactElement;
	isExpandable?: boolean;
};

interface ExpandableCardProps extends CardHeaderProps {
	contents: CardContent[];
	isExpanded?: boolean;
	onExpanded?: (isExpanded: boolean) => void;
}

function ExpandableCard({ contents, isExpanded, onExpanded, ...headerProps }: ExpandableCardProps): React.ReactElement {
	const theme = useTheme();
	const [expanded, expand] = useState(isExpanded ?? false);
	const isExpandable = contents.some((item) => item.isExpandable);

	function handleClick() {
		expand(!expanded);
		if (onExpanded !== undefined) onExpanded(!expanded);
	}

	if (!contents || contents.length === 0) {
		return <></>;
	}

	const cardContent = contents.map((item, index) =>
		item.isExpandable ? (
			<Collapse in={expanded} key={"collapse_" + index}>
				{item.content}
			</Collapse>
		) : (
			<Box key={"cardFixedContent_" + index}>{item.content}</Box>
		)
	);

	return (
		<MuiCard elevation={5}>
			<CardHeader {...headerProps} />
			<MuiCardContent>{cardContent}</MuiCardContent>

			{isExpandable && (
				<Grid container direction="column" alignItems="center" justifyContent="center">
					<IconButton onClick={handleClick}>
						<svg
							stroke={theme.palette.grey.A400}
							style={{ width: "14px", height: "14px", transform: `rotate(${isExpanded ? 180 : 0}deg)` }}
						>
							<path d="M8.166,11.3975L13.55,4.9365 12.782,4.2955 8.166,9.8355 3.55,4.2955 2.782,4.9365z" />
						</svg>
					</IconButton>
				</Grid>
			)}
		</MuiCard>
	);
}

export default ExpandableCard;
