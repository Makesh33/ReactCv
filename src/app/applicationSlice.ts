import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaletteMode } from "@mui/material";

import { UserPreference, UserPreferenceInitialState } from "../providers/UserPreferenceProvider";

import { RootState } from "./store";

const sliceName = "application";

/*#region State*/

export interface ApplicationState extends UserPreference {
	initialized: boolean;
}

export const InitialApplicationState: ApplicationState = {
	...UserPreferenceInitialState,
	initialized: false,
};

/*#endregion State*/

/*#region Slice*/

export const applicationSlice = createSlice({
	name: `${sliceName}`,
	initialState: InitialApplicationState,
	reducers: {
		applicationSetLanguage: (state, action: PayloadAction<string>) => {
			state.locale = action.payload;
		},
		applicationSetPaletteMode: (state, action: PayloadAction<PaletteMode>) => {
			state.paletteMode = action.payload;
		},
		applicationSetInitialized: (state, action: PayloadAction<boolean>) => {
			state.initialized = action.payload;
		},
	},
});

export const { applicationSetLanguage, applicationSetPaletteMode, applicationSetInitialized } =
	applicationSlice.actions;

/*#endregion Slice*/

/*#region Selectors*/

export function selectApplicationLanguage(state: RootState): string {
	return state.application.locale;
}

export function selectApplicationPaletteMode(state: RootState): PaletteMode {
	return state.application.paletteMode;
}

export function selectApplicationInitialized(state: RootState): boolean {
	return state.application.initialized;
}
/*#endregion Selectors*/

export default applicationSlice.reducer;
