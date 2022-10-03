import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import Language from "@mui/icons-material/Language";
import School from "@mui/icons-material/School";
import TravelExplore from "@mui/icons-material/TravelExplore";
import Work from "@mui/icons-material/Work";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import {
	BackgroundPath,
	ContactPath,
	ExperiencePath,
	HobbiesPath,
	HomePath,
	NavigationBarWidth,
	SkillsPath,
} from "../../app/AppConfiguration";
import { UserPreferenceContext } from "../../providers/UserPreferenceProvider";
import { ThemeModeContext } from "../../providers/ThemeModeProvider";
import { useTheme } from "@mui/material";
import { useLoggerContext } from "../../providers/LoggerProvider";

export interface NavigationItemLinkProps {
	key?: number;
	linkKey: string;
	to: string;
	i18nKey: string;
	isActive: boolean;
	onClick?: (linkKey: string) => void;
}

export type NavigationBarProps = {
	links: NavigationItemLinkProps[];
	activateLink: (linkKey: string) => void;
	open: boolean;
	onClose: VoidFunction;
};

function getLinkIcon(linkKey?: string): React.ReactElement | null {
	if (linkKey === `${HomePath}`) return <HomeIcon />;
	if (linkKey === `${SkillsPath}`) return <Language />;
	if (linkKey === `${BackgroundPath}`) return <School />;
	if (linkKey === `${ExperiencePath}`) return <Work />;
	if (linkKey === `${HobbiesPath}`) return <TravelExplore />;
	if (linkKey === `${ContactPath}`) return <ContactPageIcon />;

	return null;
}

function NavigationItemLink(props: NavigationItemLinkProps) {
	const logger = useLoggerContext();
	const { t } = useTranslation();
	const { key, linkKey, i18nKey, to, onClick, isActive } = props;

	const renderLink = React.useMemo(
		() =>
			React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(function Link(itemProps, ref) {
				return (
					<RouterLink
						to={to}
						ref={ref}
						{...itemProps}
						role={undefined}
						onClick={() => (onClick ? onClick(linkKey) : {})}
					/>
				);
			}),
		[to, linkKey, onClick]
	);

	logger.log(`NavigationItemLink ${i18nKey} isActive: ${isActive}`);
	return (
		<ListItemButton
			component={renderLink}
			key={key}
			selected={isActive}
			onClick={() => (onClick ? onClick(linkKey) : {})}
		>
			{getLinkIcon(linkKey)}
			<ListItemText primary={t(i18nKey)} sx={{ ml: 3 }} />
		</ListItemButton>
	);
}

export function NavigationBar(props: NavigationBarProps): React.ReactElement {
	const logger = useLoggerContext();
	const { i18n } = useTranslation();
	const theme = useTheme();
	const themeMode = useContext(ThemeModeContext);
	const userPreferenceContext = useContext(UserPreferenceContext);
	const locale = userPreferenceContext.locale;
	const [language, setLanguage] = React.useState<string>(locale);
	// const container = window !== undefined ? () => window().document.body : undefined;
	const container = undefined;
	const [mobileOpen, setMobileOpen] = React.useState(props.open);

	useEffect(() => {
		setMobileOpen(props.open);
		logger.log(`	NavigationBar2 entry setMobileOpen : ${mobileOpen}, open:${props.open}`);
	}, [props.open]);

	const handleOnClose = () => {
		props.onClose();
		setMobileOpen(false);

		logger.log(`	NavigationBar2 handleOnClose : ${mobileOpen}, open:${props.open}`);
	};
	logger.log(`	NavigationBar2 mobileOpen : ${mobileOpen}, open:${props.open}`);

	const handleLanguage = (event: React.MouseEvent<HTMLElement>, newlanguage: string) => {
		setLanguage(newlanguage);
		i18n.changeLanguage(newlanguage);
	};

	const drawer = (
		<div>
			<Box>
				<ToggleButtonGroup value={language} exclusive onChange={handleLanguage} aria-label="current language">
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
				<IconButton sx={{ ml: 1 }} onClick={themeMode.toggleThemeMode} color="inherit">
					{theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Box>
			<Divider />
			<List>
				{props.links.map((link, index) => (
					<NavigationItemLink
						key={index}
						to={link.to}
						linkKey={link.linkKey}
						i18nKey={link.i18nKey}
						isActive={link.isActive}
						onClick={props.activateLink}
					/>
				))}
			</List>
		</div>
	);

	return (
		<Box
			component="nav"
			sx={{ width: { sm: NavigationBarWidth }, flexShrink: { sm: 0 } }}
			aria-label="mailbox folders"
		>
			<Drawer
				container={container}
				variant="temporary"
				open={mobileOpen}
				onClose={handleOnClose}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "none" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						backgroundColor: `${theme.palette.primary.main}`,
						width: NavigationBarWidth,
					},
				}}
			>
				{drawer}
			</Drawer>
			<Drawer
				variant="permanent"
				sx={{
					display: { xs: "none", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						backgroundColor: `${theme.palette.primary.main}`,
						width: NavigationBarWidth,
					},
				}}
				open
			>
				{drawer}
			</Drawer>
		</Box>
	);
}
