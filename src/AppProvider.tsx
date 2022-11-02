import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import { store } from "./app/store";
import App from "./App";
import { bluePalette, defaultTheme, greyPalette } from "./theme/DefaultTheme";
import { UserPreferenceProvider } from "./providers/UserPreferenceProvider";
import { TranslationProvider } from "./providers/TranslationProvider";

// import i18n (needs to be bundled ;))
import applicationI18n from "./i18n";
import { ThemeModeContext } from "./providers/ThemeModeProvider";
import { LoggerProvider } from "./providers/LoggerProvider";

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

function AppProvider(): React.ReactElement {
	const [mode, setMode] = React.useState<PaletteMode>("light");
	const themeMode = React.useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const theme = React.useMemo(() => createTheme(defaultTheme, getDesignTokens(mode)), [mode]);

	return (
		<StyledEngineProvider injectFirst>
			<LoggerProvider config={{ debug: () => false }}>
				<ThemeModeContext.Provider value={themeMode}>
					<ThemeProvider theme={theme}>
						<UserPreferenceProvider>
							{/*// Provide the client to your App*/}
							<Provider store={store}>
								<TranslationProvider i18n={applicationI18n}>
									<CssBaseline />
									<App />
								</TranslationProvider>
							</Provider>
						</UserPreferenceProvider>
					</ThemeProvider>
				</ThemeModeContext.Provider>
			</LoggerProvider>
		</StyledEngineProvider>
	);
}

export default AppProvider;
