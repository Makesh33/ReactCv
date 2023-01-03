import { NavigationItemLinkProps } from "../features/navigation/NavigationBar";

export const ApplicationName = "ReactCv";

export const HomePath = "/home/";
export const SkillsPath = "/skills/";
export const BackgroundPath = "/background/";
export const ExperiencePath = "/experience/";
export const HobbiesPath = "/hobbies/";
export const ContactPath = "/contact/";

export const NavigationBarWidth = 240;

export const NavigationInitialState: NavigationItemLinkProps[] = [
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
];
