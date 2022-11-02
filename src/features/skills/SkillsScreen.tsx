import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Card from "../../components/Card";
import TitleSlider from "../../components/TitleSlider";

export function SkillsScreen(): React.ReactElement {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Grid container spacing={4} padding={theme.spacing(4)}>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={t("skills.programing.languages")}
					content={
						<Box>
							<TitleSlider title="C" level={70} />
							<TitleSlider title="C++" level={80} />
							<TitleSlider title="C#" level={80} />
							<TitleSlider title="Js/TypeScript" level={60} />
						</Box>
					}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={t("skills.frameworks")}
					content={
						<Box>
							<TitleSlider title="WPF" level={80} />
							<TitleSlider title="React/Redux/ReactQuery" level={60} />
							<TitleSlider title="Material UI" level={60} />
							<TitleSlider title="TPL/Dataflow" level={50} />
							<TitleSlider title="Prism/Mef" level={60} />
							<TitleSlider title="TopADS v6" level={70} />
						</Box>
					}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={t("skills.development-tools")}
					content={
						<Box>
							<TitleSlider title="Visual Studio" level={80} />
							<TitleSlider title="Visual Studio Code" level={50} />
							<TitleSlider title="JetBrains Rider" level={60} />
							<TitleSlider title="Snoop" level={80} />
							<TitleSlider title="SmartGit" level={80} />
							<TitleSlider title="SmartSvn" level={80} />
							<TitleSlider title="SourceTree" level={60} />
						</Box>
					}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={t("skills.softwares")}
					content={
						<Box>
							<TitleSlider title="TopSolid" level={70} />
							<TitleSlider title="Pro-Engineer" level={40} />
							<TitleSlider title="Ideas Ms" level={30} />
							<TitleSlider title="Gimp" level={40} />
						</Box>
					}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={t("skills.languages")}
					content={
						<Box>
							<TitleSlider title={t("languages.english")} level={60} />
							<TitleSlider title={t("languages.german")} level={10} />
						</Box>
					}
				/>
			</Grid>
		</Grid>
	);
}
