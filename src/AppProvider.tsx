import React from "react";
import { Provider } from "react-redux";
import { createTheme, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

import { store } from "./app/store";
import App from "./App";
import { defaultTheme } from "./theme/DefaultTheme";
import { UserPreferenceProvider } from "./providers/UserPreferenceProvider";
import { TranslationProvider } from "./providers/TranslationProvider";

// import i18n (needs to be bundled ;))
import applicationI18n from "./i18n";
import { ThemeModeContext } from "./providers/ThemeModeProvider";
import { CssBaseline, PaletteMode } from "@mui/material";
import blue from "@mui/material/colors/blue";
import deepOrange from "@mui/material/colors/deepOrange";
import grey from "@mui/material/colors/grey";
import { LoggerProvider } from "./providers/LoggerProvider";

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			...blue,
			...(mode === "dark" && {
				main: blue[300],
			}),
		},
		...(mode === "dark" && {
			background: {
				default: deepOrange[900],
				paper: deepOrange[900],
			},
		}),
		text: {
			...(mode === "light"
				? {
						primary: grey[900],
						secondary: grey[800],
				  }
				: {
						primary: "#fff",
						secondary: grey[500],
				  }),
		},
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
			<ThemeModeContext.Provider value={themeMode}>
				<ThemeProvider theme={theme}>
					<UserPreferenceProvider>
						{/*// Provide the client to your App*/}
						<Provider store={store}>
							<TranslationProvider i18n={applicationI18n}>
								<LoggerProvider config={{ debug: () => true }}>
									<CssBaseline />
									<App />
								</LoggerProvider>
							</TranslationProvider>
						</Provider>
					</UserPreferenceProvider>
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</StyledEngineProvider>
	);
}

export default AppProvider;
