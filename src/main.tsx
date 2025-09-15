import { StrictMode, useMemo, useState, createContext, useContext } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { CssBaseline, IconButton, ThemeProvider } from "@mui/material"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import "./index.css"
import App from "./App.tsx"
import { createAppTheme } from "./application/design/theme.ts"

type ColorModeContextValue = {
	toggleColorMode: () => void
	mode: "light" | "dark"
}
const ColorModeContext = createContext<ColorModeContextValue>({
	toggleColorMode: () => {},
	mode: "light",
})

const AppShell = () => {
	const [mode, setMode] = useState<"light" | "dark">(() =>
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light"
	)
	const theme = useMemo(() => createAppTheme(mode), [mode])
	const value = useMemo<ColorModeContextValue>(
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
				<div style={{ position: "fixed", top: 16, right: 16, zIndex: 1500 }}>
					<IconButton
						aria-label="Toggle color mode"
						color="primary"
						onClick={value.toggleColorMode}
					>
						{mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
					</IconButton>
				</div>
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
