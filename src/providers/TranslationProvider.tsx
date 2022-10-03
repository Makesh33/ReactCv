import React, { PropsWithChildren, useContext, useEffect } from "react";
import { i18n } from "i18next";
import { I18nextProvider } from "react-i18next";

import { UserPreferenceContext } from "./UserPreferenceProvider";

type TranslationProviderProps = PropsWithChildren<{ i18n: i18n }>;

export function TranslationProvider({ i18n, children }: TranslationProviderProps): React.ReactElement {
	const userPreferenceContext = useContext(UserPreferenceContext);
	const locale = userPreferenceContext.locale;

	useEffect(() => {
		async function changeLanguage() {
			await i18n.changeLanguage(locale);
		}

		changeLanguage().then();
	}, [locale, i18n]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
