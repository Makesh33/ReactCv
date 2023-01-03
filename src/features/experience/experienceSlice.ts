import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const sliceName = "experience";

/*#region State*/

export type ExperienceDate = { year: number; month: number };

export type ExperienceContent = {
	description: string;
	technologies?: string[];
	details?: string[];
};

export type ExperienceCard = {
	cardId: string;
	company: string;
	software?: string;
	startDate: ExperienceDate;
	endDate?: ExperienceDate;
	contents: ExperienceContent[];
	isExpanded: boolean;
};

const expandedAdapter = createEntityAdapter<ExperienceCard>({
	selectId: (card) => card.cardId,
});

/*#endregion State*/

/*#region Slice*/

export const experienceSlice = createSlice({
	name: `${sliceName}`,
	initialState: expandedAdapter.getInitialState(),
	reducers: {
		experienceSetExpandedCards: (state, action: PayloadAction<ExperienceCard[]>) => {
			expandedAdapter.setAll(state, action.payload);
		},
		experienceSetExpandedCard: (state, action: PayloadAction<{ key: string; isExpanded: boolean }>) => {
			const expandedCard = state.entities[action.payload.key];
			if (expandedCard) {
				expandedCard.isExpanded = action.payload.isExpanded;
			}
		},
	},
});

export const { experienceSetExpandedCards, experienceSetExpandedCard } = experienceSlice.actions;

/*#endregion Slice*/

/*#region Selectors*/

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const { selectAll: selectExperienceExpandedCards } = expandedAdapter.getSelectors<RootState>(
	(state) => state.experience
);

/*#endregion Selectors*/

export default experienceSlice.reducer;
