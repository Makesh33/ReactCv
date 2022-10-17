import React from "react";
import { Theme, createTheme, PaletteOptions } from "@mui/material/styles";
import { Color } from "@mui/material";
import { CSSProperties } from "@mui/material/styles/createTypography";
import blue from "@mui/material/colors/blue";

export interface CustomTypographyVariants {
	callout: CSSProperties;
	formLabel: CSSProperties;
	formValue: CSSProperties;
	required: CSSProperties;
	dialogTitle: CSSProperties;
	navigation: CSSProperties;
}

export interface CustomTypographyVariantsOptions {
	callout?: CSSProperties;
	formLabel?: CSSProperties;
	formValue?: CSSProperties;
	required?: CSSProperties;
	dialogTitle?: CSSProperties;
	navigation?: CSSProperties;
}

export interface CustomTypographyPropsVariantOverrides {
	callout: true;
	formLabel: true;
	formValue: true;
	required: true;
	dialogTitle: true;
	navigation: true;
}

declare module "@mui/material/styles" {
	interface TypographyVariants extends CustomTypographyVariants {}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions extends CustomTypographyVariantsOptions {}
}

declare module "@mui/material/Typography/Typography" {
	interface TypographyPropsVariantOverrides extends CustomTypographyPropsVariantOverrides {}
}

const greyPalette: Color = {
	// HoverColor
	50: "#E6E6E6",
	// UltraLightGreyColor/UltraLightGreyBrush/SwitchButtonBackgroundUncheckedBrush
	100: "#D9D9D9",
	// ControlNormalDisabledColor
	200: "#C5C6C7",
	// FlatNormalGreyColor/SwitchButtonNormalUncheckedBrush
	300: "#A6A6A6",
	// ControlNormalPressedColor
	400: "#859094",
	// NoDataGreyColor
	500: "#808080",
	// ControlNormalHoverColor
	600: "#575E61",
	// MediumLightGreyColor/NavigationBarBrush
	700: "#494F52",
	// MediumGreyColor/MediumGreyBrush/ControlNormalColor/NavigationBarLinkInactiveHoverBackgroundBrush
	800: "#404547",
	// DarkMediumGreyColor/DarkMediumGreyBrush/ControlNormalBackgroundBrush/NavigationBarLinkActiveHoverBackgroundBrush
	900: "#292C2E",
	// LightColor/LightBrush/ForegroundLightBrush
	A100: "#E8E8E8",
	// WhiteShadowColor/WhiteShadowBrush/DialogWindowSeparatorBrush/
	A200: "#CCCCCC",
	// LightGreyColor/LightGreyBrush/InformationGreyColor
	A400: "#999999",
	// DialogWindowForegroundColor/DarkBackgroundColor
	A700: "#333333",
};
const bluePalette: Color = {
	// SelectionHoverColor
	50: "#C2DEF2",
	// ControlPrimaryDisabledColor/ControlPrimaryDisabledBrush
	100: "#BED8E9",
	// ControlPrimaryDisabledGradientColor/ControlPrimaryDisabledBrush
	200: "#BDD3E2",
	// SelectionColorLight/SwitchButtonBackgroundCheckedBrush/ProgressBarLightColor
	300: "#A8DAFF",
	// ControlPrimaryPressedColor/ControlPrimaryPressedBrush
	400: "#38AFFF",
	// ControlPrimaryHoverColor/ControlPrimaryHoverBrush/ControlPrimaryPressedBrush
	500: "#329EE5",
	// SelectionColorControl/HighlightControlBrushKey/SwitchButtonNormalCheckedBrush/ProgressBarDarkColor/ProgressBrush
	600: "#26A3FF",
	// ControlPrimaryColor/ControlPrimaryBackgroundBrush/ControlPrimaryHoverBrush/HelpColor/HelpBrush/ConfirmationColor/ConfirmationBrush
	700: "#2980B9",
	// ControlPrimaryGradientColor/ControlPrimaryBackgroundBrush
	800: "#256FA1",
	// ManualColor/ManualBrush
	900: "#0B6DB5",
	// SelectionHoverColor
	A100: "#C2DEF2",
	// SelectionColor/SelectionBrush/HighlightBrushKey
	A200: "#CCEAFF",
	// SelectionColorLight/SwitchButtonBackgroundCheckedBrush/ProgressBarLightColor
	A400: "#A8DAFF",
	// SelectionColorControl/HighlightControlBrushKey/SwitchButtonNormalCheckedBrush/ProgressBarDarkColor/ProgressBrush
	A700: "#26A3FF",
};
const greenPalette: Partial<Color> = {
	50: "#E6FAEC",
	100: "#35E67E",
	// RoundControlCheckedPressedColor
	200: "#22F0C6",
	// SuccessColor/SuccessBrush
	300: "#2ECC71",
	400: "#29B362",
	// RoundControlCheckedHoverColor/CardPanelControlHoverBrush
	500: "#1ED6B1",
	// RoundControlCheckedColor/CardPanelControlHoverBrush
	600: "#1ABC9C",
	// AccentColor/AccentBrush/TitleBrush
	700: "#16A085",
	// FocusColor/FocusBrush
	800: "#7BB928",
	900: "#1b5e20",
	// SuccessColor/SuccessBrush
	A400: "#2ECC71",
	// AccentColor/AccentBrush/TitleBrush
	A700: "#16A085",
};

const paletteOptions = {
	mode: "light",
	background: {
		default: "#FFFFFF",
		paper: "#FFFFFF",
	},
	common: {
		black: "#000000",
		white: "#FFFFFF",
	},
	grey: greyPalette,
	primary: blue,
	secondary: {
		light: greyPalette.A400,
		main: greyPalette.A700,
		dark: greyPalette[900],
		contrastText: "#EAEAEA",
	},
	error: {
		light: "#FF4524",
		main: "#E73D20",
		dark: "#CF381D",
		contrastText: "#FBE2DE",
	},
	warning: {
		light: "#F2AF11",
		main: "#F39C12",
		dark: "#F28911",
		contrastText: "#FFF4E5",
	},
	info: {
		light: "#8A969C",
		main: "#747D82",
		dark: "#5D6569",
		contrastText: "#DFE6EB",
	},
	success: {
		light: greenPalette[200],
		main: greenPalette.A400,
		dark: greenPalette[900],
		contrastText: "#E6FAEC",
	},
	action: {
		// hover: greyPalette[50],
		selected: bluePalette[900],
		disabled: greyPalette[200],
	},
	text: {
		primary: "#000000",
		secondary: greyPalette.A100,
		disabled: greyPalette[100],
		title: greenPalette.A700,
		instruction: greyPalette[500],
		contrastText: greyPalette[100],
	},
};

const customTypography = {
	fontFamily: ['"Segoe UI"', '"Open Sans"', "sans-serif"].join(","),
	fontWeightLight: 300,
	fontWeightRegular: 400,
	fontWeightSemiBold: 500,
	fontWeightBold: 700,
	fontSizeXXXL: "2.125rem", // 34px
	fontSizeXXL: "1.5rem", // 24px
	fontSizeXL: "1.25rem", // 20px
	fontSizeL: "1.125rem", // 18px
	fontSizeM: "1rem", // 16px
	fontSizeS: "0.875rem", // 14px
	fontSizeXS: "0.75rem", // 12px
	fontSizeCallout: "0.875rem", // 14px
	fontSizeBody: "0.875rem", // 14px
	fontSizeFormLabel: "0.875rem", // 14px
	fontSizeFormValue: "0.875rem", // 14px
	fontSizeRequired: "0.75rem", // 12px
	fontSizeDialogTitle: "0.8125rem", // 13px
};

let defaultTheme = createTheme({
	typography: {
		fontFamily: customTypography.fontFamily,
		fontWeightLight: customTypography.fontWeightLight,
		fontWeightRegular: customTypography.fontWeightRegular,
		fontWeightMedium: customTypography.fontWeightSemiBold,
		fontWeightBold: customTypography.fontWeightBold,
		h1: {
			fontSize: customTypography.fontSizeXXXL,
			fontWeight: customTypography.fontWeightSemiBold,
			lineHeight: 1.5,
		},
		h2: {
			fontSize: customTypography.fontSizeXXL,
			fontWeight: customTypography.fontWeightLight,
			lineHeight: 1.5,
		},
		h3: {
			fontSize: customTypography.fontSizeXL,
			fontWeight: customTypography.fontWeightSemiBold,
			lineHeight: 1.4,
		},
		h4: {
			fontSize: customTypography.fontSizeXL,
			fontWeight: customTypography.fontWeightLight,
			lineHeight: 1.5,
		},
		h5: {
			fontSize: customTypography.fontSizeS,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.5,
		},
		h6: {
			fontSize: customTypography.fontSizeM,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.5,
		},
		body1: {
			fontSize: customTypography.fontSizeBody,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.428,
		},
		callout: {
			fontSize: customTypography.fontSizeCallout,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.5,
			display: "block",
		},
		formLabel: {
			fontSize: customTypography.fontSizeFormLabel,
			fontWeight: customTypography.fontWeightLight,
			lineHeight: 1.428,
			display: "block",
		},
		formValue: {
			fontSize: customTypography.fontSizeFormValue,
			fontWeight: customTypography.fontWeightSemiBold,
			lineHeight: 1.428,
			display: "block",
		},
		required: {
			fontSize: customTypography.fontSizeRequired,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.428,
			display: "block",
		},
		dialogTitle: {
			fontSize: customTypography.fontSizeDialogTitle,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.84615385,
			display: "block",
		},
		navigation: {
			fontSize: customTypography.fontSizeXS,
			fontWeight: customTypography.fontWeightRegular,
			lineHeight: 1.235,
			display: "block",
		},
	},
	palette: paletteOptions as PaletteOptions,
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1440,
		},
	},
	spacing: [0, 2, 5, 10, 15, 20, 30, 40],
});

defaultTheme = createTheme(defaultTheme, {
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontFamily: defaultTheme.typography.fontFamily,
					fontSize: defaultTheme.typography.body1.fontSize,
					fontWeight: defaultTheme.typography.body1.fontWeight,
					lineHeight: defaultTheme.typography.body1.lineHeight,
					letterSpacing: "0.01071em",
					boxSizing: "border-box",
					height: "100%",
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					textOverflow: "ellipsis",
					overflow: "hidden",
				},
			},
		},
		MuiAvatar: {
			styleOverrides: {
				root: {
					height: "25px",
					width: "25px",
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: "contained",
			},
			styleOverrides: {
				root: {
					boxShadow: "none",
					border: 0,
					borderRadius: "4px",
					height: "34px",
					minWidth: "100px",
					padding: defaultTheme.spacing(0, 3),
					background: `linear-gradient(0deg, ${bluePalette[700]} 30%, ${bluePalette[800]} 90%)`,
					textTransform: "initial",
				},
				containedPrimary: {
					background: `linear-gradient(0deg, ${bluePalette[700]} 30%, ${bluePalette[800]} 90%)`,
					"&:hover": {
						background: `linear-gradient(0deg, ${bluePalette[700]} 30%, ${bluePalette[500]} 90%)`,
					},
					"&:active": {
						background: `linear-gradient(0deg, ${bluePalette[500]} 30%, ${bluePalette[400]} 90%)`,
					},
					"&.Mui-disabled": {
						// override color, because default .MuiButton-contained.Mui-disabled style overrides it
						color: defaultTheme.palette.primary.contrastText,
						background: `linear-gradient(0deg, ${bluePalette[100]} 30%, ${bluePalette[200]} 90%)`,
					},
				},
				containedSecondary: {
					background: `linear-gradient(0deg, ${greyPalette[800]} 30%, ${greyPalette[900]} 90%)`,
					"&:hover": {
						background: `linear-gradient(0deg, ${greyPalette[800]} 30%, ${greyPalette[600]} 90%)`,
					},
					"&:active": {
						background: `linear-gradient(0deg, ${greyPalette[600]} 30%, ${greyPalette[400]} 90%)`,
					},
					"&.Mui-disabled": {
						// override color, because default .MuiButton-contained.Mui-disabled style overrides it
						color: defaultTheme.palette.secondary.contrastText,
						background: `linear-gradient(0deg, ${greyPalette[200]} 30%, ${greyPalette[200]} 90%)`,
					},
				},
				textPrimary: {
					color: defaultTheme.palette.common.white,
				},
			},
		},
		MuiDialogActions: {
			styleOverrides: {
				root: {
					"&>:not(:first-of-type)": {
						marginLeft: defaultTheme.spacing(3),
					},
				},
			},
		},
		// MuiListItem: {
		// 	styleOverrides: {
		// 		root: {
		// 			"&.Mui-selected": {
		// 				backgroundColor: bluePalette.A700,
		// 				"&:hover": {
		// 					backgroundColor: bluePalette[50],
		// 				},
		// 			},
		// 			// borderTop: `1px solid ${greyPalette[100]}`,
		// 			// borderLeft: `1px solid ${greyPalette[100]}`,
		// 			// borderRight: `1px solid ${greyPalette[100]}`,
		// 		},
		// 		button: {
		// 			root: {
		// 				webkitFlexGrow: "0",
		// 				flexGrow: "0",
		// 				"&.Mui-selected": {
		// 					backgroundColor: defaultTheme.palette.action.selected,
		// 				},
		// 			},
		// 		},
		// 	},
		// },
		MuiListItemButton: {
			styleOverrides: {
				root: {
					webkitFlexGrow: "0",
					flexGrow: "0",
					"&.Mui-selected": {
						backgroundColor: defaultTheme.palette.action.selected,
					},
				},
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: {
					"* > &:last-of-type": {
						justifyContent: "flex-end",
					},
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				root: {
					marginTop: "4px !important",
					marginBottom: "4px !important",
				},
			},
		},
		MuiToolbar: {
			styleOverrides: {
				gutters: {
					[defaultTheme.breakpoints.up("xs")]: {
						paddingLeft: "20px",
						paddingRight: "10px",
					},
				},
				regular: {
					[defaultTheme.breakpoints.down("xl")]: {
						minHeight: "56px",
						height: "56px",
					},
					[defaultTheme.breakpoints.up("lg")]: {
						minHeight: "38px",
						height: "38px",
					},
				},
			},
		},
		MuiSwitch: {
			defaultProps: {
				color: "primary",
			},
			styleOverrides: {
				switchBase: {
					color: greyPalette[300],
					"&.Mui-checked": {
						color: bluePalette["A700"],
					},
					"&.Mui-checked + .MuiSwitch-track": {
						backgroundColor: bluePalette["A400"],
					},
				},
				track: { backgroundColor: greyPalette[100] },
				colorPrimary: {
					"&.Mui-checked": {
						color: bluePalette["A700"],
					},
					"&.Mui-checked + .MuiSwitch-track": {
						backgroundColor: bluePalette["A400"],
					},
					"&.Mui-disabled": {
						// override color, because default .MuiButton-contained.Mui-disabled style overrides it
						color: bluePalette["A700"],
					},
				},
				colorSecondary: {
					"&.Mui-checked": {
						color: bluePalette["A700"],
					},
					"&.Mui-checked + .MuiSwitch-track": {
						backgroundColor: bluePalette["A400"],
					},
				},
			},
		},
	},
});

export { defaultTheme };
