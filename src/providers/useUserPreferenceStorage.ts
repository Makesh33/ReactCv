import { useEffect } from "react";

import { ApplicationName } from "../app/AppConfiguration";
import { useAppSelector } from "../app/hooks";
import {
	selectApplicationInitialized,
	selectApplicationLanguage,
	selectApplicationPaletteMode,
} from "../app/applicationSlice";
import { getItemFromStorage, setItemToStorage } from "../utils/Storage";

import { UserPreference, UserPreferenceInitialState } from "./UserPreferenceProvider";

/*region Storage*/

const userPreferenceAttribute = "userPreference";

export function useUserPreferenceStorage(): {
	getUserPreferenceStorage: () => UserPreference;
	setUserPreferenceStorage: (userPreference?: UserPreference) => void;
} {
	return {
		getUserPreferenceStorage: () =>
			getItemFromStorage(ApplicationName, userPreferenceAttribute, UserPreferenceInitialState) ??
			UserPreferenceInitialState,
		setUserPreferenceStorage: (userPreference?: UserPreference) =>
			setItemToStorage(ApplicationName, userPreferenceAttribute, userPreference),
	};
}

export function useUserPreferenceStateUpdateStorage(): void {
	const { getUserPreferenceStorage, setUserPreferenceStorage } = useUserPreferenceStorage();
	const initialized = useAppSelector(selectApplicationInitialized);
	const language = useAppSelector(selectApplicationLanguage);
	const paletteMode = useAppSelector(selectApplicationPaletteMode);
	const userPreferenceState = getUserPreferenceStorage();

	useEffect(() => {
		if (initialized) {
			userPreferenceState.locale = language;
			userPreferenceState.paletteMode = paletteMode;
		}

		setUserPreferenceStorage(userPreferenceState);
	}, [language, paletteMode]);
}

/*endregion Storage*/
