import { useEffect } from "react";

import { ApplicationName } from "../../app/AppConfiguration";
import { useAppSelector } from "../../app/hooks";
import { getItemFromStorage, setItemToStorage } from "../../utils/Storage";

import { ExperienceCard, selectExperienceExpandedCards } from "./experienceSlice";

interface ExperienceState {
	experienceCards: ExperienceCard[];
}

/*region Initial state*/

const initialCardExpandedState = true;
export const InitialExperienceState: ExperienceState = {
	experienceCards: [
		{
			cardId: "experience.cutting-room-web",
			company: "Lectra",
			software: "CuttingRoom",
			startDate: { year: 2021, month: 4 },
			contents: [
				{
					//i18next.t("experience.cutting-room-web.description")
					description: "experience.cutting-room-web.description",
					technologies: ["React", "JavaScript/TypeScript", "Redux", "ReactQuery", "Material UI"],
					details: [
						//i18next.t("experience.cutting-room-web.detail_1")
						"experience.cutting-room-web.detail_1",
						//i18next.t("experience.cutting-room-web.detail_2")
						"experience.cutting-room-web.detail_2",
						//i18next.t("experience.cutting-room-web.detail_3")
						"experience.cutting-room-web.detail_3",
						//i18next.t("experience.cutting-room-web.detail_4")
						"experience.cutting-room-web.detail_4",
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
						//i18next.t("experience.cutting-room-desktop.detail_4")
						"experience.cutting-room-desktop.detail_4",
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
	],
};

/*endregion Initial state*/

/*region Storage*/

export const experienceStateAttribute = "experienceState";

export function useExperienceStorage(): {
	getExperienceStateFromStorage: () => ExperienceState;
	setExperienceStateToStorage: (experienceState?: ExperienceState) => void;
} {
	return {
		getExperienceStateFromStorage: () =>
			getItemFromStorage(ApplicationName, experienceStateAttribute, InitialExperienceState) ??
			InitialExperienceState,
		setExperienceStateToStorage: (experienceState?: ExperienceState) =>
			setItemToStorage(ApplicationName, experienceStateAttribute, experienceState),
	};
}

export function useExperienceStateUpdateStorage(): void {
	const { getExperienceStateFromStorage, setExperienceStateToStorage } = useExperienceStorage();
	const experienceCards = useAppSelector(selectExperienceExpandedCards);
	const experienceState = getExperienceStateFromStorage();

	useEffect(() => {
		if (experienceCards.length > 0) {
			experienceState.experienceCards = experienceCards;
		}
		setExperienceStateToStorage(experienceState);
	}, [experienceCards, setExperienceStateToStorage]);
}

/*endregion Storage*/
