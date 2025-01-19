import { Box, Button, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Pagination from "../../components/pagination/Pagination"

// TODO: LOTS TO DO HERE
// - [ ] Add a loading state / skeleton loader
// - [x] Add a way to view the full image
// - [ ] Update colors of pagination controls to match the theme
// - [ ] Fetch images from the backend or from AWS S3
// - [ ] Remove hardcoded image count
// - [x] Extract logic to a custom pagination component
// - [ ] Extract home button to a custom navigation component

const imagesPerPage = 8

const Portfolio = () => {
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState<number>(1)

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
						padding: "8px 16px",
					}}
				>
					<Button onClick={() => navigate("/")}>
						<HomeIcon />
					</Button>
				</Box>
			</Box>
			<Typography variant="h2" sx={{ marginTop: 6, marginBottom: 2 }}>
				Portfolio
			</Typography>

			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>

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

			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>
		</Box>
	)
}

export default Portfolio
