import {
	Box,
	Button,
	Typography,
	ImageList,
	ImageListItem,
	Dialog,
	IconButton,
	Skeleton,
	useMediaQuery,
	useTheme,
	Link,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import CloseIcon from "@mui/icons-material/Close"
import { useNavigate, Link as RouterLink } from "react-router-dom"
import { useEffect, useMemo, useState, useCallback } from "react"
import Pagination from "../../components/pagination/Pagination"

// TODO:
// - [ ] Add a loading state / skeleton loader
// - [ ] Fetch images from the backend or from AWS S3
// - [ ] Remove hardcoded image count
// - [ ] Extract home button to a custom navigation component

const imagesPerPage = 12

const Portfolio = (): JSX.Element => {
	const navigate = useNavigate()
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [lightboxOpen, setLightboxOpen] = useState<boolean>(false)
	const [activeIndex, setActiveIndex] = useState<number>(0)
	const theme = useTheme()
	const isSmall = useMediaQuery(theme.breakpoints.down("sm"))

	const totalImages = 29
	const totalPages = Math.ceil(totalImages / imagesPerPage)

	const startIndex = (currentPage - 1) * imagesPerPage
	const endIndex = startIndex + imagesPerPage

	const images = useMemo(
		() =>
			Array.from(
				{ length: totalImages },
				(_, i) =>
					`https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/evergreen-construction-ri/image${
						i + 1
					}.JPG`
			),
		[totalImages]
	)

	useEffect(() => {
		// Preload current page thumbnails
		setIsLoading(true)
		const slice = images.slice(startIndex, endIndex)
		let loaded = 0
		slice.forEach((src) => {
			const img = new Image()
			img.src = src
			img.onload = () => {
				loaded += 1
				if (loaded === slice.length) setIsLoading(false)
			}
			img.onerror = () => {
				loaded += 1
				if (loaded === slice.length) setIsLoading(false)
			}
		})
	}, [images, startIndex, endIndex])

	const openLightbox = useCallback((index: number) => {
		setActiveIndex(index)
		setLightboxOpen(true)
	}, [])

	const closeLightbox = useCallback(() => setLightboxOpen(false), [])

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			if (!lightboxOpen) return
			if (e.key === "ArrowRight")
				setActiveIndex((prev) => (prev + 1) % images.length)
			if (e.key === "ArrowLeft")
				setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
			if (e.key === "Escape") closeLightbox()
		},
		[closeLightbox, images.length, lightboxOpen]
	)

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
						backgroundColor: theme.palette.background.paper,
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

			<Box sx={{ width: "100%", px: 2 }} onKeyDown={handleKeyDown}>
				{isLoading ? (
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
							gap: 2,
						}}
					>
						{Array.from({ length: imagesPerPage }).map((_, idx) => (
							<Skeleton
								key={idx}
								variant="rounded"
								height={isSmall ? 160 : 220}
								sx={{ borderRadius: 2 }}
							/>
						))}
					</Box>
				) : (
					<ImageList variant="masonry" cols={isSmall ? 2 : 4} gap={16}>
						{images.slice(startIndex, endIndex).map((src, idx) => (
							<ImageListItem
								key={src}
								sx={{
									position: "relative",
									overflow: "hidden",
									borderRadius: 2,
								}}
							>
								<img
									src={`${src}`}
									srcSet={`${src}`}
									alt={`Portfolio item ${startIndex + idx + 1}`}
									loading="lazy"
									onClick={() => openLightbox(startIndex + idx)}
									style={{
										borderRadius: 12,
										boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
										width: "100%",
										height: "100%",
										display: "block",
									}}
								/>
								<Box
									className="portfolio-caption"
									sx={{
										position: "absolute",
										inset: 0,
										display: "flex",
										alignItems: "flex-end",
										p: 1.5,
										background:
											"linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0))",
										opacity: 0,
										transition: "opacity 200ms ease",
										"&:hover": { opacity: 1 },
									}}
								>
									<Box
										sx={{
											display: "flex",
											width: "100%",
											justifyContent: "space-between",
											alignItems: "center",
											color: "#fff",
										}}
									>
										<Typography variant="subtitle2">
											Project {startIndex + idx + 1}
										</Typography>
										<Link
											component={RouterLink}
											to={`/portfolio/${startIndex + idx + 1}`}
											underline="hover"
											sx={{ color: "#fff" }}
										>
											Details
										</Link>
									</Box>
								</Box>
							</ImageListItem>
						))}
					</ImageList>
				)}
			</Box>

			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>
			<Dialog
				open={lightboxOpen}
				onClose={closeLightbox}
				fullWidth
				maxWidth="xl"
				onKeyDown={(e) => handleKeyDown(e)}
			>
				<Box
					sx={{
						position: "relative",
						backgroundColor: theme.palette.background.default,
					}}
				>
					<IconButton
						aria-label="Close"
						onClick={closeLightbox}
						sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}
					>
						<CloseIcon />
					</IconButton>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							p: 2,
						}}
					>
						<img
							src={images[activeIndex]}
							alt={`Portfolio item ${activeIndex + 1}`}
							style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: 8 }}
						/>
					</Box>
				</Box>
			</Dialog>
		</Box>
	)
}

export default Portfolio
