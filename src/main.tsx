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
	const [mode, setMode] = useState<ColorMode>(() => {
		try {
			const stored = localStorage.getItem("color-mode") as ColorMode | null
			if (stored === "light" || stored === "dark") return stored
		} catch {}
		const prefersDark =
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		return prefersDark ? "dark" : "light"
	})
	const theme = useMemo(() => createAppTheme(mode), [mode])
	const value = useMemo(
		() => ({
			mode,
			toggleColorMode: () => {
				setMode((prev) => {
					const next = prev === "light" ? "dark" : "light"
					try {
						localStorage.setItem("color-mode", next)
					} catch {}
					return next
				})
			},
		}),
		[mode]
	)

	// Sync with system preference changes if the user hasn't explicitly chosen
	if (typeof window !== "undefined") {
		const mq = window.matchMedia("(prefers-color-scheme: dark)")
		let hasUserPref = false
		try {
			hasUserPref = localStorage.getItem("color-mode") !== null
		} catch {}
		if (!hasUserPref) {
			const listener = (e: MediaQueryListEvent) => {
				setMode(e.matches ? "dark" : "light")
			}
			if (mq.addEventListener) mq.addEventListener("change", listener)
			// Safari fallback
			// @ts-ignore
			else if (mq.addListener) mq.addListener(listener)
		}
	}

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
