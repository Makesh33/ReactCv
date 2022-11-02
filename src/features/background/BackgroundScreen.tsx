import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "../../components/Card";

export function BackgroundScreen(): React.ReactElement {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Grid container spacing={4} padding={theme.spacing(4)}>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={`1999-${t("date.today")} - ${t("background.professional-training")}`}
					content={<Box>{t("background.professional-training-content")}</Box>}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={`1998-99 - ${t("background.estia-cranfield")}`}
					content={<Box>{t("background.cadcamcae-degree")}</Box>}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={`1997-98 - ${t("background.grenoble-university")}`}
					content={<Box>{t("background.computer-degree")}</Box>}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={`1996-97 - ${t("background.toulon-university")}`}
					content={<Box>{t("background.marine-degree")}</Box>}
				/>
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card
					title={`1994-96 - ${t("background.grenoble-university")}`}
					content={<Box>{t("background.mechanical-degree")}</Box>}
				/>
			</Grid>
		</Grid>
	);
}
