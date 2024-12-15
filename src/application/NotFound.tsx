import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
const NotFound = () => {
	const navigate = useNavigate()

	const customColors = {
		background: "#f0f0f0",
		primary: "#004338",
		text: "#757575",
	}

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			height="100vh"
		>
			<img
				src="/evergreen-construction-logo.svg"
				alt="Evergreen Construction Logo"
				style={{ width: "100px", marginBottom: "3rem", borderRadius: "10px" }}
			/>
			<Typography variant="h2" component="h2" sx={{ color: customColors.text }}>
				404
			</Typography>
			<Typography variant="h2" component="h2" sx={{ color: customColors.text }}>
				Not Found
			</Typography>
			<Typography
				variant="body1"
				sx={{ margin: "1rem", color: customColors.text }}
			>
				The page you are looking for does not exist.
			</Typography>
			<Button
				variant="contained"
				sx={{ margin: "1rem", backgroundColor: customColors.primary }}
				onClick={() => navigate("/")}
			>
				Go to Home
			</Button>
		</Box>
	)
}

export default NotFound
