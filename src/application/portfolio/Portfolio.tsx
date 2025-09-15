import {
	Box,
	Container,
	Dialog,
	IconButton,
	ImageList,
	ImageListItem,
	Link,
	Skeleton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Link as RouterLink } from "react-router-dom"
import { alpha } from "@mui/material/styles"
import { useCallback, useEffect, useMemo, useState, useRef } from "react"
import Pagination from "../../components/pagination/Pagination"

const imagesPerPage = 12

const AnimatedImageItem = ({
	src,
	alt,
	absIndex,
	onOpen,
	detailsHref,
}: {
	src: string
	alt: string
	absIndex: number
	onOpen: (index: number) => void
	detailsHref: string
}): JSX.Element => {
	const theme = useTheme()
	const ref = useRef<HTMLLIElement | null>(null)
	const [inView, setInView] = useState(false)

	useEffect(() => {
		const element = ref.current
		if (!element) return
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true)
						observer.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.15 }
		)
		observer.observe(element)
		return () => observer.disconnect()
	}, [])

	return (
		<ImageListItem
			ref={ref}
			sx={{
				position: "relative",
				overflow: "hidden",
				borderRadius: 2,
				border: `1px solid ${alpha(
					theme.palette.common.black,
					theme.palette.mode === "light" ? 0.08 : 0.3
				)}`,
				boxShadow:
					theme.palette.mode === "light"
						? "0 6px 16px rgba(0,0,0,0.08)"
						: "0 10px 22px rgba(0,0,0,0.5)",
				transition:
					"transform 220ms ease, box-shadow 220ms ease, opacity 400ms ease, transform 400ms ease",
				opacity: inView ? 1 : 0,
				transform: inView ? "translateY(0px)" : "translateY(8px)",
				"&:hover": {
					transform: "translateY(-2px)",
					boxShadow:
						theme.palette.mode === "light"
							? "0 12px 28px rgba(0,0,0,0.14)"
							: "0 14px 32px rgba(0,0,0,0.6)",
				},
				"&:hover .overlay": { opacity: 1 },
				"&:hover img": { transform: "scale(1.02)" },
			}}
		>
			<img
				src={src}
				srcSet={src}
				alt={alt}
				loading="lazy"
				onClick={() => onOpen(absIndex)}
				style={{
					borderRadius: 8,
					width: "100%",
					height: "100%",
					display: "block",
					transition: "transform 300ms ease",
				}}
			/>
			<Box
				className="overlay"
				sx={{
					position: "absolute",
					inset: 0,
					display: "flex",
					alignItems: "flex-end",
					p: 1.5,
					background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0))",
					opacity: 0,
					transition: "opacity 180ms ease",
					pointerEvents: "none",
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
					<Typography variant="subtitle2">Project {absIndex + 1}</Typography>
					<Link
						component={RouterLink}
						to={detailsHref}
						underline="hover"
						sx={{ color: "#fff", pointerEvents: "auto" }}
					>
						{/* TODO: Add details*/}
					</Link>
				</Box>
			</Box>
		</ImageListItem>
	)
}

const Portfolio = (): JSX.Element => {
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
		<Container maxWidth="lg" sx={{ py: { xs: 2, sm: 4 } }}>
			<Typography
				variant={isSmall ? "h3" : "h2"}
				sx={{ mb: 1, fontWeight: 800, letterSpacing: -0.5 }}
			>
				Portfolio
			</Typography>
			<Typography color="text.secondary" sx={{ mb: 3 }}>
				Selected projects showcasing craftsmanship and detail.
			</Typography>

			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				totalPages={totalPages}
			/>

			<Box
				sx={{ width: "100%", px: { xs: 0, sm: 1 }, mt: 2 }}
				onKeyDown={handleKeyDown}
			>
				{isLoading ? (
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
							gap: 3,
						}}
					>
						{Array.from({ length: imagesPerPage }).map((_, idx) => (
							<Skeleton
								key={idx}
								variant="rounded"
								height={isSmall ? 180 : 240}
								sx={{ borderRadius: 2 }}
							/>
						))}
					</Box>
				) : (
					<ImageList variant="masonry" cols={isSmall ? 2 : 4} gap={24}>
						{images.slice(startIndex, endIndex).map((src, idx) => (
							<AnimatedImageItem
								key={src}
								src={src}
								alt={`Portfolio item ${startIndex + idx + 1}`}
								absIndex={startIndex + idx}
								onOpen={openLightbox}
								detailsHref={`/portfolio/${startIndex + idx + 1}`}
							/>
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
					<IconButton
						aria-label="Previous"
						onClick={() =>
							setActiveIndex(
								(prev) => (prev - 1 + images.length) % images.length
							)
						}
						sx={{
							position: "absolute",
							left: 8,
							top: "50%",
							transform: "translateY(-50%)",
							zIndex: 2,
						}}
					>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton
						aria-label="Next"
						onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
						sx={{
							position: "absolute",
							right: 8,
							top: "50%",
							transform: "translateY(-50%)",
							zIndex: 2,
						}}
					>
						<ChevronRightIcon />
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
		</Container>
	)
}

export default Portfolio
