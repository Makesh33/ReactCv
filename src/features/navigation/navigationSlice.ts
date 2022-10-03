import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";
import { NavigationItemLinkProps } from "./NavigationBar";

const sliceName = "navigation";

/*#region State*/

const navigationAdapter = createEntityAdapter<NavigationItemLinkProps>({
	selectId: (link) => link.linkKey,
});

/*#endregion State*/

/*#region Slice*/

export const navigationSlice = createSlice({
	name: `${sliceName}`,
	initialState: navigationAdapter.getInitialState(),
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
	extraReducers: {},
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
