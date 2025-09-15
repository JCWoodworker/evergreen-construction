import { createContext, useContext } from "react"

export type ColorMode = "light" | "dark"

export type ColorModeContextValue = {
	mode: ColorMode
	toggleColorMode: () => void
}

export const ColorModeContext = createContext<ColorModeContextValue>({
	mode: "light",
	toggleColorMode: () => {},
})

export const useColorMode = () => useContext(ColorModeContext)
