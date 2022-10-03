const typescriptTransform = require("i18next-scanner-typescript");

module.exports = {
	input: [
		"src/**/*.{ts,tsx}",
		// Use ! to filter out files or directories
		"!src/**/*.spec.{ts,tsx}",
		"!**/node_modules/**",
		"!**/.yalc/**",
	],
	output: "./",
	options: {
		lngs: ["en-US", "fr-FR"],
		ns: ["curriculum-vitae"],
		defaultNs: "curriculum-vitae",
		// defaultLng: "en-us",
		defaultValue(lng, ns, key) {
			return `§${key}`;
		},
		debug: false,
		sort: true,
		removeUnusedKeys: false,
		func: {
			extensions: [".ts", ".tsx"],
			list: ["i18next.t", "i18n.t", "t"],
		},
		trans: {
			// extensions: [".ts", ".tsx"],
			fallbackKey: function (ns, value) {
				return value;
			},
		},
		resource: {
			loadPath: "src/locales/{{ns}}_{{lng}}.json",
			savePath: "src/locales/{{ns}}_{{lng}}.json",
			jsonIndent: 4,
			lineEnding: "\n",
		},
		nsSeparator: ":",
		keySeparator: ".",
		pluralSeparator: "_",
		contextSeparator: "_",
		contextDefaultValues: [],
		interpolation: {
			prefix: "{{",
			suffix: "}}",
		},
	},
	transform: typescriptTransform({
		extensions: ["ts", ".tsx"],
		// optional ts configuration
		tsOptions: {
			target: "es5",
		},
	}),
};
