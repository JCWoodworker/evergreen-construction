import { StrictMode, useMemo, useState } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { CssBaseline, ThemeProvider } from "@mui/material"
import "./index.css"
import App from "./App.tsx"
import { createAppTheme } from "./application/design/theme.ts"
import {
	ColorModeContext,
	ColorMode,
} from "./application/design/ColorModeContext.ts"

const AppShell = () => {
	const [mode, setMode] = useState<ColorMode>(() =>
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	)
	const theme = useMemo(() => createAppTheme(mode), [mode])
	const value = useMemo(
		() => ({
			mode,
			toggleColorMode: () =>
				setMode((prev) => (prev === "light" ? "dark" : "light")),
		}),
		[mode]
	)

	return (
		<ColorModeContext.Provider value={value}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<AppShell />
		</BrowserRouter>
	</StrictMode>
)
