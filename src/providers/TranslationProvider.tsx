import React, { PropsWithChildren, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { i18n } from "i18next";

import { useAppSelector } from "../app/hooks";
import { selectApplicationInitialized, selectApplicationLanguage } from "../app/applicationSlice";

import { useLoggerContext } from "./LoggerProvider";

type TranslationProviderProps = PropsWithChildren<{ i18n: i18n }>;

export function TranslationProvider({ i18n, children }: TranslationProviderProps): React.ReactElement {
	const logger = useLoggerContext();
	const language = useAppSelector(selectApplicationLanguage);
	const initialized = useAppSelector(selectApplicationInitialized);

	useEffect(() => {
		if (initialized) {
			logger.log(`TranslationProvider changeLanguage: ${language}`);
			i18n.changeLanguage(language).then();
		}
	}, [language, initialized, i18n]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
