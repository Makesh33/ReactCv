import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { fileSave } from "browser-fs-access";

import { useLoggerContext } from "../../providers/LoggerProvider";

export function HomeScreen(): React.ReactElement {
	const logger = useLoggerContext();
	const theme = useTheme();
	const { i18n, t } = useTranslation();

	function handleDownloadCv() {
		const locale = i18n.language;
		logger.log(`Download Cv_${locale}.pdf`);

		const headers = new Headers();
		headers.append("Accept", "application/pdf");
		headers.append("Content-Type", "application/pdf");

		fetch(`/Cv_${locale}.pdf`, {
			headers: { "Content-Type": "application/pdf", Accept: "application/pdf" },
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Network response was not ok: ${response.statusText}`);
				}
				return response.blob();
			})
			.then((blob) => {
				fileSave(blob, { fileName: `Cv_${locale}`, extensions: [".pdf"], mimeTypes: ["application/pdf"] });
			});
	}

	return (
		<Box padding={theme.spacing(4)}>
			<Typography variant="h1">{t("curriculum_vitae.name")}</Typography>
			<Typography variant="h3" mt={theme.spacing(1)}>
				{t("curriculum_vitae.function")}
			</Typography>
			<Typography mt={theme.spacing(3)}>{t("curriculum_vitae.description")}</Typography>
			<Button sx={{ marginTop: theme.spacing(4) }} onClick={handleDownloadCv}>
				{t("curriculum_vitae.download")}
			</Button>
		</Box>
	);
}
