import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
	BackgroundPath,
	ContactPath,
	ExperiencePath,
	HobbiesPath,
	HomePath,
	SkillsPath,
} from "../../app/AppConfiguration";
import { RootState } from "../../app/store";

import { NavigationItemLinkProps } from "./NavigationBar";

const sliceName = "navigation";

/*#region State*/

export interface NavigationState {
	navigationLinks: NavigationItemLinkProps[];
}

const navigationAdapter = createEntityAdapter<NavigationItemLinkProps>({
	selectId: (link) => link.linkKey,
});

export const InitialNavigationState = navigationAdapter.getInitialState<NavigationState>({
	navigationLinks: [
		{
			to: `${HomePath}`,
			linkKey: `${HomePath}`,
			// i18next.t("navigation.home")
			i18nKey: "navigation.home",
			isActive: true,
		},
		{
			to: `${SkillsPath}`,
			linkKey: `${SkillsPath}`,
			// i18next.t("navigation.skills")
			i18nKey: "navigation.skills",
			isActive: false,
		},
		{
			to: `${BackgroundPath}`,
			linkKey: `${BackgroundPath}`,
			// i18next.t("navigation.background")
			i18nKey: "navigation.background",
			isActive: false,
		},
		{
			to: `${ExperiencePath}`,
			linkKey: `${ExperiencePath}`,
			// i18next.t("navigation.experience")
			i18nKey: "navigation.experience",
			isActive: false,
		},
		{
			to: `${HobbiesPath}`,
			linkKey: `${HobbiesPath}`,
			// i18next.t("navigation.hobbies")
			i18nKey: "navigation.hobbies",
			isActive: false,
		},
		{
			to: `${ContactPath}`,
			linkKey: `${ContactPath}`,
			// i18next.t("navigation.contact")
			i18nKey: "navigation.contact",
			isActive: false,
		},
	],
});

/*#endregion State*/

/*#region Slice*/

export const navigationSlice = createSlice({
	name: `${sliceName}`,
	initialState: InitialNavigationState,
	reducers: {
		navigationSetLinks: (state, action: PayloadAction<NavigationItemLinkProps[]>) => {
			navigationAdapter.setAll(state, action.payload);
		},
		navigationActivateLink: (state, action: PayloadAction<string>) => {
			Object.values(state.entities).forEach((link) => {
				if (link) {
					link.isActive = link?.linkKey === action.payload;
				}
			});
		},
		navigationSetUrl: (state, action: PayloadAction<{ key: string; toUrl: string }>) => {
			const navigationLink = state.entities[action.payload.key];
			if (navigationLink) {
				navigationLink.to = action.payload.toUrl;
			}
		},
	},
});

export const { navigationSetLinks, navigationActivateLink, navigationSetUrl } = navigationSlice.actions;

/*#endregion Slice*/

/*#region Selectors*/

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export const { selectAll: selectNavigationLinks } = navigationAdapter.getSelectors<RootState>(
	(state) => state.navigation
);

/*#endregion Selectors*/

export default navigationSlice.reducer;
