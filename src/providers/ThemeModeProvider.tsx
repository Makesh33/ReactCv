import React, { ReactNode } from "react";
import { PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { applicationSetPaletteMode, selectApplicationPaletteMode } from "../app/applicationSlice";
import { bluePalette, defaultTheme, greyPalette } from "../theme/DefaultTheme";

import { useLoggerContext } from "./LoggerProvider";

const ThemeModeContext = React.createContext({
	toggleThemeMode: () => {
		// do nothing.
	},
});

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					background: {
						default: "#FFFFFF",
						paper: "#FFFFFF",
					},
					primary: {
						light: bluePalette.A400,
						main: bluePalette[700],
						dark: bluePalette[900],
						...bluePalette,
						contrastText: "#FFFFFF",
					},
					action: {
						hover: bluePalette[800],
						selected: bluePalette[900],
						disabled: greyPalette[200],
					},
					text: {
						primary: greyPalette[900],
						secondary: greyPalette[100],
						title: greyPalette[100],
						contrastText: greyPalette[100],
						disabled: greyPalette[100],
						instruction: greyPalette[500],
					},
			  }
			: {
					background: {
						default: greyPalette[900],
						paper: greyPalette[900],
					},
					primary: {
						light: greyPalette.A400,
						main: greyPalette.A700,
						dark: greyPalette[900],
						...greyPalette,
						contrastText: "#FFFFFF",
					},
					action: {
						hover: greyPalette[800],
						selected: greyPalette[900],
						disabled: greyPalette[200],
					},
					text: {
						primary: greyPalette[400],
						secondary: greyPalette[900],
						title: greyPalette[400],
						contrastText: greyPalette[800],
						disabled: greyPalette[100],
						instruction: greyPalette[500],
					},
			  }),
	},
});

export function ThemeModeProvider(props: { children: ReactNode }): React.ReactElement {
	const logger = useLoggerContext();
	const dispatch = useAppDispatch();
	const paletteMode = useAppSelector(selectApplicationPaletteMode);
	const themeMode = React.useMemo(
		() => ({
			toggleThemeMode: () => {
				logger.log(`toggleThemeMode from ${paletteMode}`);
				dispatch(applicationSetPaletteMode(paletteMode === "light" ? "dark" : "light"));
			},
		}),
		[paletteMode]
	);

	const theme = React.useMemo(() => createTheme(defaultTheme, getDesignTokens(paletteMode)), [paletteMode]);

	logger.log(`ThemeModeProvider paletteMode(${paletteMode})`);
	return (
		<ThemeModeContext.Provider value={themeMode}>
			<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
		</ThemeModeContext.Provider>
	);
}

export { ThemeModeContext };
