import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import resourcesToBackend from "i18next-resources-to-backend";

const applicationI18n = i18next.createInstance();
applicationI18n
	// i18next-http-backend
	// loads translations from your server
	// https://github.com/i18next/i18next-http-backend
	.use(ChainedBackend)
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	// .use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		lng: "en-us",
		fallbackLng: false,
		// ns: ["cutting-room-marker-conversion", "cutting-room-foundation-ui"],
		ns: ["curriculum-vitae"],
		defaultNS: "curriculum-vitae",
		// resources,
		load: "currentOnly",
		// initImmediate: true,
		backend: {
			// path where resources get loaded from, or a function
			// returning a path:
			// function(lngs, namespaces) { return customPath; }
			// the returned path will interpolate lng, ns if provided like giving a static path
			//
			// If allowMultiLoading is false, lngs and namespaces will have only one element each,
			// If allowMultiLoading is true, lngs and namespaces can have multiple elements
			// loadPath: "./locales/{{lng}}/{{ns}}.json",
			backends: [
				HttpBackend, // if a namespace can't be loaded via normal http-backend loadPath, then the inMemoryLocalBackend will try to return the correct resources
				resourcesToBackend((language, namespace, callback) => {
					import(`./locales/${namespace}_${language}.json`)
						.then((resources) => {
							callback(null, resources);
						})
						.catch((error) => {
							callback(error, null);
						});
				}),
			],
			backendOptions: [
				{
					loadPath: `${process.env.PUBLIC_URL}/locales/{{ns}}_{{lng}}.json`,
				},
			],
		},
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
