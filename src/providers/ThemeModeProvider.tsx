import { useTheme } from "@mui/material";
import React, { ReactNode } from "react";
import { useLoggerContext } from "./LoggerProvider";

const ThemeModeContext = React.createContext({
	toggleThemeMode: () => {
		// do nothing.
	},
});

export function ThemeModeProvider(props: { children: ReactNode }): React.ReactElement {
	const logger = useLoggerContext();
	const theme = useTheme();
	const [mode, setMode] = React.useState<"light" | "dark">("light");
	const themeMode = React.useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
				theme.palette.mode = mode;
				logger.log(`	ThemeModeProvider toggleThemeMode : ${mode}`);
			},
		}),
		[]
	);

	return <ThemeModeContext.Provider value={themeMode}>{props.children}</ThemeModeContext.Provider>;
}

export { ThemeModeContext };
