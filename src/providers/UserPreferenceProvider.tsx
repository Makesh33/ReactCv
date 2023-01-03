import React, { ReactNode, useEffect, useState } from "react";
import _ from "lodash";
import { PaletteMode } from "@mui/material";

import { useUserPreferenceStorage } from "./useUserPreferenceStorage";
import { useLoggerContext } from "./LoggerProvider";

export interface UserPreference {
	locale: string;
	paletteMode: PaletteMode;
}
export const UserPreferenceInitialState: UserPreference = { locale: "fr-FR", paletteMode: "light" };

const UserPreferenceContext = React.createContext<UserPreference>(UserPreferenceInitialState);

export function UserPreferenceProvider(props: { children: ReactNode }): React.ReactElement {
	const logger = useLoggerContext();
	const { getUserPreferenceStorage, setUserPreferenceStorage } = useUserPreferenceStorage();
	const userPreferenceStorage = getUserPreferenceStorage();
	const [userPreference, setUserPreference] = useState<UserPreference>(userPreferenceStorage);

	const searchParams = new URLSearchParams(window.location.search);
	const localeParam = searchParams.get("locale");
	const paletteModeParam = searchParams.get("palette-mode") as PaletteMode;

	useEffect(() => {
		const newUserPreference: UserPreference = {
			locale: localeParam ?? userPreferenceStorage?.locale ?? UserPreferenceInitialState.locale,
			paletteMode:
				paletteModeParam ?? userPreferenceStorage?.paletteMode ?? UserPreferenceInitialState.paletteMode,
		};

		if (!_.isEqual(newUserPreference, userPreference)) {
			logger.log(`UserPreferenceProvider setUserPreferenceStorage: `, newUserPreference);
			setUserPreference(newUserPreference);
			setUserPreferenceStorage(newUserPreference);
		}
	}, [localeParam, paletteModeParam]);

	logger.log(`UserPreferenceContext.Provider : `, userPreference);
	return <UserPreferenceContext.Provider value={userPreference}>{props.children}</UserPreferenceContext.Provider>;
}

export { UserPreferenceContext };
