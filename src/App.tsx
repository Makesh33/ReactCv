import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useTheme } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import { AppRoutes } from "./app/AppRoutes";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { ApplicationName, NavigationBarWidth } from "./app/AppConfiguration";
import { ErrorFallback } from "./components/ErrorFallback";
import { NavigationBar } from "./features/navigation/NavigationBar";
import {
	navigationActivateLink,
	navigationSetLinks,
	selectNavigationLinks,
} from "./features/navigation/navigationSlice";
import { experienceSetExpandedCards } from "./features/experience/experienceSlice";
import { UserPreferenceContext } from "./providers/UserPreferenceProvider";
import { useNavigationStorage, useNavigationStateUpdateStorage } from "./features/navigation/useNavigationStorage";
import { DataToStore, useUpdateStorage } from "./utils/Storage";
import { useExperienceStateUpdateStorage, useExperienceStorage } from "./features/experience/useExperienceStorage";
import {
	applicationSetInitialized,
	applicationSetLanguage,
	applicationSetPaletteMode,
	selectApplicationLanguage,
} from "./app/applicationSlice";
import { useUserPreferenceStateUpdateStorage } from "./providers/useUserPreferenceStorage";

function App(): React.ReactElement {
	const theme = useTheme();
	const dispatch = useAppDispatch();
	const language = useAppSelector(selectApplicationLanguage);
	const navigationLinks = useAppSelector(selectNavigationLinks);
	const userPreferenceContext = useContext(UserPreferenceContext);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const { getNavigationStateFromStorage } = useNavigationStorage();
	const { getExperienceStateFromStorage } = useExperienceStorage();
	const [dataToStore, setDataToStore] = React.useState<DataToStore>();

	useUpdateStorage(ApplicationName, dataToStore);
	useUserPreferenceStateUpdateStorage();
	useNavigationStateUpdateStorage();
	useExperienceStateUpdateStorage();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleLanguage = (event: React.MouseEvent<HTMLElement>, newlanguage: string) => {
		dispatch(applicationSetLanguage(newlanguage));
	};

	useEffect(() => {
		dispatch(applicationSetLanguage(userPreferenceContext.locale));
		dispatch(applicationSetPaletteMode(userPreferenceContext.paletteMode));
		console.log(
			`App from userPreferenceContext dispatch(applicationSetPaletteMode(${userPreferenceContext.paletteMode}))`
		);

		const navigationState = getNavigationStateFromStorage();
		dispatch(navigationSetLinks(navigationState.navigationLinks));
		const experienceState = getExperienceStateFromStorage();
		dispatch(experienceSetExpandedCards(experienceState.experienceCards));

		dispatch(applicationSetInitialized(true));
		// setDataToStore({ navigationStateAttribute: navigationState, experienceStateAttribute: experienceState });
	}, []);

	return (
		<Router>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Box sx={{ display: "flex", width: "100%", height: "100%" }}>
					<NavigationBar
						links={navigationLinks}
						activateLink={(linkKey: string) => dispatch(navigationActivateLink(linkKey))}
						open={mobileOpen}
						onClose={handleDrawerToggle}
					/>
					<Box sx={{ display: "flex", height: "100%" }}>
						<AppBar
							position="fixed"
							sx={{
								display: { xs: "block", sm: "none" },
								width: { sm: `calc(100% - ${NavigationBarWidth})` },
								ml: { sm: `${NavigationBarWidth}` },
								backgroundColor: `${theme.palette.primary.main}`,
							}}
						>
							<Toolbar>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
									onClick={handleDrawerToggle}
									sx={{ mr: 3, display: { sm: "none" } }}
								>
									<MenuIcon />
								</IconButton>
								<Box sx={{ flexGrow: 1 }} />
								<ToggleButtonGroup
									value={language}
									exclusive
									onChange={handleLanguage}
									aria-label="current language"
								>
									<ToggleButton value="fr-FR" aria-label="french language">
										<img
											loading="lazy"
											width="20"
											src={`https://flagcdn.com/w20/fr.png`}
											srcSet={`https://flagcdn.com/w40/fr.png 2x`}
											alt=""
										/>
									</ToggleButton>
									<ToggleButton value="en-US" aria-label="english language">
										<img
											loading="lazy"
											width="20"
											src={`https://flagcdn.com/w20/us.png`}
											srcSet={`https://flagcdn.com/w40/us.png 2x`}
											alt=""
										/>
									</ToggleButton>
								</ToggleButtonGroup>
							</Toolbar>
						</AppBar>
						<Box>
							<Toolbar
								sx={{
									display: { xs: "block", sm: "none" },
								}}
							/>
							<AppRoutes />
						</Box>
					</Box>
				</Box>
			</ErrorBoundary>
		</Router>
	);
}

export default App;
