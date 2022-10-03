import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import navigationReducer from "../features/navigation/navigationSlice";
import experienceReducer from "../features/experience/experienceSlice";

export const store = configureStore({
	reducer: {
		navigation: navigationReducer,
		experience: experienceReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
