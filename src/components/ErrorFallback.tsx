import React from "react";
import { useTranslation } from "react-i18next";
import { FallbackProps } from "react-error-boundary";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export function ErrorFallback(fallbackProps: FallbackProps): React.ReactElement {
	const { t } = useTranslation();

	const handleClose = () => {
		fallbackProps.resetErrorBoundary();
	};

	return (
		<Dialog open={true} onClose={handleClose}>
			<DialogTitle id="alert-dialog-title">{t("error.unknown")}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">{fallbackProps.error.message}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>{t("dialog.close")}</Button>
			</DialogActions>
		</Dialog>
	);
}
