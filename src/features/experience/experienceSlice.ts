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

const initialCardExpandedState = true;
export const ExperienceInitialState: ExperienceCard[] = [
	{
		cardId: "experience.cutting-room-web",
		company: "Lectra",
		software: "CuttingRoom",
		startDate: { year: 2021, month: 4 },
		contents: [
			{
				//i18next.t("experience.cutting-room-web.description")
				description: "experience.cutting-room-web.description",
				technologies: ["React", "JavaScript/TypeScript", "Redux", "ReactQuery"],
				details: [
					//i18next.t("experience.cutting-room-web.detail_1")
					"experience.cutting-room-web.detail_1",
					//i18next.t("experience.cutting-room-web.detail_2")
					"experience.cutting-room-web.detail_2",
					//i18next.t("experience.cutting-room-web.detail_3")
					"experience.cutting-room-web.detail_3",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.cutting-room-desktop",
		company: "Lectra",
		software: "CuttingRoom",
		startDate: { year: 2016, month: 6 },
		endDate: { year: 2021, month: 4 },
		contents: [
			{
				//i18next.t("experience.cutting-room-desktop.description")
				description: "experience.cutting-room-desktop.description",
				technologies: ["C#", "Wpf", "Mef", "Tpl"],
				details: [
					//i18next.t("experience.cutting-room-desktop.detail_1")
					"experience.cutting-room-desktop.detail_1",
					//i18next.t("experience.cutting-room-desktop.detail_2")
					"experience.cutting-room-desktop.detail_2",
					//i18next.t("experience.cutting-room-desktop.detail_3")
					"experience.cutting-room-desktop.detail_3",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.pocs2016",
		company: "Lectra",
		startDate: { year: 2016, month: 1 },
		endDate: { year: 2016, month: 6 },
		contents: [
			{
				//i18next.t("experience.furniture-cad-study")
				description: "experience.furniture-cad-study",
			},
			{
				//i18next.t("experience.virtual")
				description: "experience.virtual",
				technologies: ["Unity", "HTC/Vive"],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.modaris-3d",
		company: "Lectra",
		software: "Modaris 3DFit",
		startDate: { year: 2014, month: 1 },
		endDate: { year: 2016, month: 1 },
		contents: [
			{
				//i18next.t("experience.modaris-3d.description")
				description: "experience.modaris-3d.description",
				technologies: ["C++", "MFC"],
				details: [
					//i18next.t("experience.modaris-3d.detail_1")
					"experience.modaris-3d.detail_1",
					//i18next.t("experience.modaris-3d.detail_2")
					"experience.modaris-3d.detail_2",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.catalog-3d",
		company: "Lectra",
		software: "Catalog3D",
		startDate: { year: 2013, month: 1 },
		endDate: { year: 2013, month: 12 },
		contents: [
			{
				//i18next.t("experience.catalog-3d.description")
				description: "experience.catalog-3d.description",
				technologies: ["C#", "Wpf", "Surface", "Prism"],
				details: [
					//i18next.t("experience.catalog-3d.detail_1")
					"experience.catalog-3d.detail_1",
					//i18next.t("experience.catalog-3d.detail_2")
					"experience.catalog-3d.detail_2",
					//i18next.t("experience.catalog-3d.detail_3")
					"experience.catalog-3d.detail_3",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.modaris-2d",
		company: "Lectra",
		software: "Modaris",
		startDate: { year: 2011, month: 1 },
		endDate: { year: 2012, month: 12 },
		contents: [
			{
				//i18next.t("experience.modaris-2d.description")
				description: "experience.modaris-2d.description",
				technologies: ["C++"],
				details: [
					//i18next.t("experience.modaris-2d.detail_1")
					"experience.modaris-2d.detail_1",
					//i18next.t("experience.modaris-2d.detail_2")
					"experience.modaris-2d.detail_2",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.user-workspace",
		company: "Lectra",
		software: "UserWorkspace",
		startDate: { year: 2009, month: 11 },
		endDate: { year: 2010, month: 12 },
		contents: [
			{
				//i18next.t("experience.user-workspace.description")
				description: "experience.user-workspace.description",
				technologies: ["C#", "Wpf", "Prism"],
				details: [
					//i18next.t("experience.user-workspace.detail_1")
					"experience.user-workspace.detail_1",
					//i18next.t("experience.user-workspace.detail_2")
					"experience.user-workspace.detail_2",
					//i18next.t("experience.user-workspace.detail_3")
					"experience.user-workspace.detail_3",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.designconcept",
		company: "Lectra",
		software: "DesignConcept",
		startDate: { year: 2002, month: 8 },
		endDate: { year: 2009, month: 10 },
		contents: [
			{
				//i18next.t("experience.designconcept.description")
				description: "experience.designconcept.description",
				technologies: ["C++", "TopADS"],
				details: [
					//i18next.t("experience.designconcept.detail_1")
					"experience.designconcept.detail_1",
					//i18next.t("experience.designconcept.detail_2")
					"experience.designconcept.detail_2",
					//i18next.t("experience.designconcept.detail_3")
					"experience.designconcept.detail_3",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
	{
		cardId: "experience.helioss",
		company: "Mecalog",
		software: "HELIOSS",
		startDate: { year: 1999, month: 9 },
		endDate: { year: 2002, month: 7 },
		contents: [
			{
				//i18next.t("experience.helioss.description")
				description: "experience.helioss.description",
				technologies: ["C++", "Qt"],
				details: [
					//i18next.t("experience.helioss.detail_1")
					"experience.helioss.detail_1",
					//i18next.t("experience.helioss.detail_2")
					"experience.helioss.detail_2",
				],
			},
		],
		isExpanded: initialCardExpandedState,
	},
];

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
	extraReducers: {},
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
