import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import cvEN from "./locales/curriculum-vitae_en-US.json";
import cvFR from "./locales/curriculum-vitae_fr-FR.json";
const resources = {
	"en-US": {
		translation: cvEN,
	},
	"fr-FR": {
		translation: cvFR,
	},
};
const Languages = ["en-US", "fr-FR"];

const applicationI18n = i18next.createInstance();
applicationI18n
	// i18next-http-backend
	// loads translations from your server
	// https://github.com/i18next/i18next-http-backend
	.use(Backend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	// .use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: false,
		lng: "fr-FR",
		fallbackLng: "fr-FR",
		resources,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
			// format: (value, format, lng) => {
			//     if (value instanceof Date) {
			//         return DateTime.fromJSDate(value).setLocale(lng).toLocaleString(DateTime[format])
			//     }
			//     return value;
			// }
		},
		// react: {
		// 	useSuspense: false,
		// },
	});

export default applicationI18n;
