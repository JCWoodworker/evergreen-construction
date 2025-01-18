import { Box, Button, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { useNavigate } from "react-router-dom"

const Portfolio = () => {
	const navigate = useNavigate()

	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<Typography variant="h1" sx={{ marginTop: 6, marginBottom: 2 }}>
				Portfolio
			</Typography>
			<Button
				sx={{
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					zIndex: 1000,
					backgroundColor: "white",
					boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
				}}
				onClick={() => navigate("/")}
			>
				<HomeIcon />
			</Button>

			<Box className="portfolio-container">
				{Array.from({ length: 29 }, (_, i) => {
					const imageUrl = `https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/evergreen-construction-ri/image${
						i + 1
					}.JPG`
					return (
						<a href={imageUrl} target="_blank" rel="noopener noreferrer">
							<img
								key={i}
								src={imageUrl}
								alt={`Portfolio item ${i + 1}`}
								className="portfolio-image"
							/>
						</a>
					)
				})}
			</Box>
		</Box>
	)
}

export default Portfolio
