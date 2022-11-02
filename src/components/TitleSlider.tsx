import React from "react";
import Slider from "@mui/material/Slider";

import LabelValue from "./LabelValue";

interface TitleSliderProps {
	title: string;
	level: number;
}

function TitleSlider(props: TitleSliderProps): React.ReactElement {
	const { title, level } = props;
	return (
		<LabelValue
			label={title}
			value={
				<Slider
					defaultValue={level}
					valueLabelDisplay="auto"
					size="small"
					disabled={true}
					sx={{
						color: "primary.A200",
						height: 8,
						"& .MuiSlider-track": {
							border: "none",
						},
						"& .MuiSlider-thumb": {
							height: 24,
							width: 24,
							backgroundColor: "background.default",
							border: "2px solid currentColor",
							"&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
								boxShadow: "inherit",
							},
							"&:before": {
								display: "none",
							},
						},
						"& .MuiSlider-valueLabel": {
							lineHeight: 1.2,
							fontSize: 12,
							background: "unset",
							padding: 0,
							width: 32,
							height: 32,
							borderRadius: "50% 50% 50% 0",
							backgroundColor: "primary.A200",
							transformOrigin: "bottom left",
							transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
							"&:before": { display: "none" },
							"&.MuiSlider-valueLabelOpen": {
								transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
							},
							"& > *": {
								transform: "rotate(45deg)",
							},
						},
					}}
				/>
			}
		/>
	);
}

export default TitleSlider;
