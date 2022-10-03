import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { BackgroundPath, ContactPath, ExperiencePath, HobbiesPath, HomePath, SkillsPath } from "./AppConfiguration";
import { HomeScreen } from "../features/home/HomeScreen";
import { SkillsScreen } from "../features/skills/SkillsScreen";
import { ExperienceScreen } from "../features/experience/ExperienceScreen";
import { HobbiesScreen } from "../features/hobbies/HobbiesScreen";
import { BackgroundScreen } from "../features/background/BackgroundScreen";
import ContactScreen from "../features/contact/ContactScreen";

export function AppRoutes(): React.ReactElement {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={HomePath} replace />} />
			<Route path={`${HomePath}`} element={<HomeScreen />} />
			<Route path={`${BackgroundPath}`} element={<BackgroundScreen />} />
			<Route path={`${SkillsPath}`} element={<SkillsScreen />} />
			<Route path={`${ExperiencePath}`} element={<ExperienceScreen />} />
			<Route path={`${HobbiesPath}`} element={<HobbiesScreen />} />
			<Route path={`${ContactPath}`} element={<ContactScreen />} />
		</Routes>
	);
}
