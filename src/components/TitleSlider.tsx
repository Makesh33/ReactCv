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
			value={<Slider defaultValue={level} valueLabelDisplay="on" size="small" disabled={true} />}
		/>
	);
}

export default TitleSlider;
