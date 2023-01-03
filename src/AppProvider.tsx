import React from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { store } from "./app/store";
import App from "./App";
import { UserPreferenceProvider } from "./providers/UserPreferenceProvider";
import { TranslationProvider } from "./providers/TranslationProvider";
import { ThemeModeProvider } from "./providers/ThemeModeProvider";
import { LoggerProvider } from "./providers/LoggerProvider";

// import i18n (needs to be bundled ;))
import applicationI18n from "./i18n";

function AppProvider(): React.ReactElement {
	return (
		<StyledEngineProvider injectFirst>
			<LoggerProvider config={{ debug: () => false }}>
				<UserPreferenceProvider>
					{/*// Provide the client to your App*/}
					<Provider store={store}>
						<ThemeModeProvider>
							<TranslationProvider i18n={applicationI18n}>
								<CssBaseline />
								<App />
							</TranslationProvider>
						</ThemeModeProvider>
					</Provider>
				</UserPreferenceProvider>
			</LoggerProvider>
		</StyledEngineProvider>
	);
}

export default AppProvider;
