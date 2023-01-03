import { useEffect } from "react";

import { ApplicationName } from "../../app/AppConfiguration";
import { useAppSelector } from "../../app/hooks";
import { getItemFromStorage, setItemToStorage } from "../../utils/Storage";

import { InitialNavigationState, NavigationState, selectNavigationLinks } from "./navigationSlice";

/*region Storage*/

export const navigationStateAttribute = "navigationState";

export function useNavigationStorage(): {
	getNavigationStateFromStorage: () => NavigationState;
	setNavigationStateToStorage: (navigationState?: NavigationState) => void;
} {
	return {
		getNavigationStateFromStorage: () =>
			getItemFromStorage(ApplicationName, navigationStateAttribute, InitialNavigationState) ??
			InitialNavigationState,
		setNavigationStateToStorage: (navigationState?: NavigationState) =>
			setItemToStorage(ApplicationName, navigationStateAttribute, navigationState),
	};
}

export function useNavigationStateUpdateStorage(): void {
	const { getNavigationStateFromStorage, setNavigationStateToStorage } = useNavigationStorage();
	const navigationLinks = useAppSelector(selectNavigationLinks);
	const navigationState = getNavigationStateFromStorage();

	useEffect(() => {
		if (navigationLinks.length > 0) {
			navigationState.navigationLinks = navigationLinks;
		}
		setNavigationStateToStorage(navigationState);
	}, [navigationLinks, setNavigationStateToStorage]);
}

/*endregion Storage*/
