import React, { ReactNode, useEffect, useState } from "react";

interface UserPreference {
	locale: string;
}

const DEFAULT_USER_PREFERENCE: UserPreference = { locale: "fr-FR" };
const UserPreferenceContext = React.createContext<UserPreference>(DEFAULT_USER_PREFERENCE);

export function UserPreferenceProvider(props: { children: ReactNode }): React.ReactElement {
	const [userPreference, setUserPreference] = useState<UserPreference>(DEFAULT_USER_PREFERENCE);

	const searchParams = new URLSearchParams(window.location.search);
	const localeParam = searchParams.get("locale");

	useEffect(() => {
		if (localeParam) {
			setUserPreference({ locale: localeParam });
		}
	}, [localeParam]);

	return <UserPreferenceContext.Provider value={userPreference}>{props.children}</UserPreferenceContext.Provider>;
}

export { UserPreferenceContext };
