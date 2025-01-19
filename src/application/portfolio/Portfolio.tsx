import { Box, Button, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

// TODO: LOTS TO DO HERE
// - [ ] Add a loading state
// - [ ] Add a way to view the full image
// - [ ] Update colors of pagination controls to match the theme
// - [ ] Fetch images from the backend or from AWS S3
// - [ ] Remove hardcoded image count
// - [ ] Extract logic to a custom pagination component
// - [ ] Extract home button to a custom navigation component

const imagesPerPage = 8

const Portfolio = () => {
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState(1)

	const totalImages = 29
	const totalPages = Math.ceil(totalImages / imagesPerPage)

	const startIndex = (currentPage - 1) * imagesPerPage
	const endIndex = startIndex + imagesPerPage

	return (
		<Box
			sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					width: "100%",
					justifyContent: "space-between",
					padding: "0 16px",
				}}
			>
				<Box
					sx={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						zIndex: 1000,
						backgroundColor: "white",
						boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
						transition: "background-color 0.3s",
						display: "flex",
						justifyContent: "flex-start",
						padding: "8px 16px", // Optional padding for the Box
					}}
				>
					<Button onClick={() => navigate("/")}>
						<HomeIcon />
					</Button>
				</Box>
			</Box>
			<Typography variant="h1" sx={{ marginTop: 6, marginBottom: 2 }}>
				Portfolio
			</Typography>

			{/* Pagination Controls */}
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Button
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
				>
					Previous
				</Button>
				<Typography sx={{ margin: "0 1rem" }}>
					Page {currentPage} of {totalPages}
				</Typography>
				<Button
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages}
				>
					Next
				</Button>
			</Box>
			<Box sx={{ marginTop: 2 }}>
				{Array.from({ length: totalPages }, (_, i) => (
					<Button
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						variant={currentPage === i + 1 ? "contained" : "outlined"}
						sx={{ margin: "0 2px" }}
					>
						{i + 1}
					</Button>
				))}
			</Box>
			{/* End Pagination Controls */}

			<Box className="portfolio-container">
				{Array.from({ length: totalImages }, (_, i) => {
					const imageUrl = `https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/evergreen-construction-ri/image${
						i + 1
					}.JPG`
					if (i >= startIndex && i < endIndex) {
						return (
							<a
								key={i}
								href={imageUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={imageUrl}
									alt={`Portfolio item ${i + 1}`}
									className="portfolio-image"
									loading="lazy"
								/>
							</a>
						)
					}
					return null
				})}
			</Box>
			{/* Pagination Controls */}
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Button
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
				>
					Previous
				</Button>
				<Typography sx={{ margin: "0 1rem" }}>
					Page {currentPage} of {totalPages}
				</Typography>
				<Button
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, totalPages))
					}
					disabled={currentPage === totalPages}
				>
					Next
				</Button>
			</Box>
			<Box sx={{ marginTop: 2 }}>
				{Array.from({ length: totalPages }, (_, i) => (
					<Button
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						variant={currentPage === i + 1 ? "contained" : "outlined"}
						sx={{ margin: "0 2px" }}
					>
						{i + 1}
					</Button>
				))}
			</Box>
			{/* End Pagination Controls */}
		</Box>
	)
}

export default Portfolio
