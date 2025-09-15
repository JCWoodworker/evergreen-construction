import { createTheme } from "@mui/material/styles"
import type { PaletteMode } from "@mui/material"

// Brand colors derived from the logo and existing usage across the app
export const evergreen = "#004338" // primary
export const warmGray = "#757575" // text / dividers
export const naturalBeige = "#E8E2D5" // surface alt
export const skyBlue = "#CAEBF2" // links/highlights
export const offWhite = "#F8F8F7" // main background
export const copper = "#B98555" // subtle accent

export const colorData = [
	{
		name: "Deep Forest Green",
		hex: evergreen,
		usage: "Logo, headers, call-to-action buttons, accent elements",
	},
	{
		name: "Warm Gray",
		hex: warmGray,
		usage: "Body text, section dividers, backgrounds for CTAs",
	},
	{
		name: "Natural Beige",
		hex: naturalBeige,
		usage: "Backgrounds, alternating sections with white",
	},
	{
		name: "Sky Blue",
		hex: skyBlue,
		usage: "Links, icons, highlighting key information",
	},
	{ name: "Off-White", hex: offWhite, usage: "Main background, whitespace" },
	{
		name: "Copper",
		hex: copper,
		usage: "Subtle accent for icons, small highlights",
	},
]

export const createAppTheme = (mode: PaletteMode) =>
	createTheme({
		palette: {
			mode,
			primary: {
				main: evergreen,
				light: "#2a6a5d",
				dark: "#002a23",
				contrastText: "#ffffff",
			},
			secondary: {
				main: copper,
				light: "#d1a97a",
				dark: "#8e6337",
				contrastText: "#1b1b1b",
			},
			info: { main: skyBlue },
			background:
				mode === "light"
					? { default: offWhite, paper: "#ffffff" }
					: { default: "#0f1514", paper: "#121a19" },
			text:
				mode === "light"
					? { primary: "#1b1b1b", secondary: warmGray }
					: { primary: "#e8e8e8", secondary: "#a7b0ad" },
			divider: mode === "light" ? "#e0e0e0" : "#2a3533",
		},
		shape: { borderRadius: 12 },
		typography: {
			fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
			h1: { fontWeight: 700, letterSpacing: -0.5 },
			h2: { fontWeight: 700, letterSpacing: -0.25 },
			h3: { fontWeight: 700 },
			button: { textTransform: "none", fontWeight: 600 },
		},
		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: 12,
					},
				},
			},
			MuiAppBar: {
				defaultProps: { elevation: 0 },
				styleOverrides: {
					root: { backdropFilter: "saturate(180%) blur(12px)" },
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage: "none",
					},
				},
			},
		},
	})
