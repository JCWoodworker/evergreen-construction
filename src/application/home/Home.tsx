// TODO: Update to MUI's Gridv2 - Grid v1 is deprecated
import { Box, Typography, Grid, Card, CardContent } from "@mui/material"
import FreeEstimateButton from "../contact/calls-to-action/free-estimate/FreeEstimateButton"
import { useState } from "react"
import FreeEstimateModal from "../contact/calls-to-action/free-estimate/FreeEstimateModal"
import ContactModal from "../contact/calls-to-action/contact/ContactModal"
import ContactButton from "../contact/calls-to-action/contact/ContactButton"

const Home = () => {
	const [estimateModalOpen, setEstimateModalOpen] = useState(false)
	const [contactModalOpen, setContactModalOpen] = useState(false)
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

			<FreeEstimateButton setEstimateModalOpen={setEstimateModalOpen} />

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

			<ContactButton setContactModalOpen={setContactModalOpen} />

			<FreeEstimateModal
				open={estimateModalOpen}
				handleClose={() => setEstimateModalOpen(false)}
			/>
			<ContactModal
				open={contactModalOpen}
				handleClose={() => setContactModalOpen(false)}
			/>
		</Box>
	)
}

export default Home
