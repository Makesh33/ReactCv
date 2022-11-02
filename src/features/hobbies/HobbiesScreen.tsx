import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "../../components/Card";

export function HobbiesScreen(): React.ReactElement {
	const theme = useTheme();
	const { t } = useTranslation();

	return (
		<Grid container spacing={4} padding={theme.spacing(4)}>
			<Grid item xs={12} md={6} lg={4}>
				<Card title={t("hobbies.trips")} content={<Box>{t("hobbies.trips-content")}</Box>} />
			</Grid>
			<Grid item xs={12} md={6} lg={4}>
				<Card title={t("hobbies.sports")} content={<Box>{t("hobbies.sports-content")}</Box>} />
			</Grid>
		</Grid>
	);
}
