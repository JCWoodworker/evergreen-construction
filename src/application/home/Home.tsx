import { Box, Typography } from "@mui/material"

const Home = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<img
				style={{ margin: "20px", width: "300px", borderRadius: "20px" }}
				src="/evergreen-construction-logo.svg"
				alt="Evergreen Construction Logo"
			/>
			<Typography variant="body1" sx={{ color: "#004338", textAlign: "center" }}>
				Future Home of
			</Typography>
			<Typography variant="h3" sx={{ color: "#004338", textAlign: "center" }}>
				Evergreen Construction, LLC
			</Typography>
		</Box>
	)
}

export default Home
