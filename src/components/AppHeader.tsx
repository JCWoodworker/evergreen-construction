import { AppBar, Box, Container, IconButton, Toolbar } from "@mui/material"
import { Link as RouterLink, useLocation } from "react-router-dom"
import HomeIcon from "@mui/icons-material/Home"
import WorkIcon from "@mui/icons-material/Work"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { useTheme } from "@mui/material/styles"
import { useColorMode } from "../application/design/ColorModeContext"

const AppHeader = (): JSX.Element => {
	const theme = useTheme()
	const location = useLocation()
	const { mode, toggleColorMode } = useColorMode()

	return (
		<AppBar
			position="sticky"
			color="transparent"
			sx={{
				borderBottom: `1px solid ${theme.palette.divider}`,
				backdropFilter: "saturate(180%) blur(12px)",
			}}
		>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
						<Box
							component={RouterLink}
							to="/"
							sx={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
							}}
						>
							<img
								src="/evergreen-construction-logo.svg"
								alt="Evergreen Construction"
								style={{ height: 28, marginRight: 0 }}
							/>
						</Box>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 0.5,
							flexWrap: "nowrap",
						}}
					>
						<IconButton
							component={RouterLink}
							to="/"
							color={location.pathname === "/" ? "primary" : "default"}
							aria-label="Home"
						>
							<HomeIcon />
						</IconButton>
						<IconButton
							component={RouterLink}
							to="/portfolio"
							color={
								location.pathname.startsWith("/portfolio")
									? "primary"
									: "default"
							}
							aria-label="Portfolio"
						>
							<WorkIcon />
						</IconButton>
						<IconButton
							onClick={toggleColorMode}
							aria-label="Toggle color mode"
						>
							{mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default AppHeader
