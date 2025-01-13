import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material"

const Home = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "flex-start",
				backgroundColor: "#f5f5f5",
				borderRadius: "10px",
				padding: 2,
				minHeight: "100vh",
			}}
		>
			<img
				className="banner"
				src="/evergreen-construction-banner.svg"
				alt="Evergreen Construction Logo"
			/>

			<Typography
				variant="h3"
				sx={{ color: "#004338", textAlign: "center", fontWeight: "bold" }}
			>
				Evergreen Construction, RI
			</Typography>
			<Typography
				variant="body1"
				sx={{ color: "#004338", textAlign: "center", marginBottom: 4 }}
			>
				Building Your Dreams with Quality and Integrity
			</Typography>
			<Button
				variant="contained"
				color="primary"
				sx={{ marginBottom: 4, backgroundColor: "#004338" }}
				href="/free-estimate"
			>
				Get a Free Estimate
			</Button>
			<Grid container spacing={4} justifyContent="center">
				<Grid item xs={12} sm={6} md={4}>
					<Card>
						<CardContent>
							<Typography
								variant="h5"
								component="div"
								sx={{ fontWeight: "bold" }}
							>
								Residential Construction
							</Typography>
							<Typography variant="body2" color="text.secondary">
								We specialize in building beautiful homes tailored to your
								needs.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card>
						<CardContent>
							<Typography
								variant="h5"
								component="div"
								sx={{ fontWeight: "bold" }}
							>
								Commercial Projects
							</Typography>
							<Typography variant="body2" color="text.secondary">
								From offices to retail spaces, we deliver quality commercial
								construction.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<Card>
						<CardContent>
							<Typography
								variant="h5"
								component="div"
								sx={{ fontWeight: "bold" }}
							>
								Remodeling Services
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Transform your space with our expert remodeling services.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Button
				variant="contained"
				color="primary"
				sx={{ margin: 4, backgroundColor: "#004338" }}
				href="/free-estimate"
			>
				Get a Free Estimate
			</Button>
		</Box>
	)
}

export default Home
