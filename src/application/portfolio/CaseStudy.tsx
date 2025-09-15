import { Box, Breadcrumbs, Container, Divider, Typography } from "@mui/material"
import { Link as RouterLink, useParams } from "react-router-dom"

const CaseStudy = (): JSX.Element => {
	const { id } = useParams()

	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Breadcrumbs sx={{ mb: 2 }}>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/portfolio">Portfolio</RouterLink>
				<Typography color="text.primary">Project {id}</Typography>
			</Breadcrumbs>
			<Typography variant="h3" sx={{ mb: 1 }}>
				Project {id}
			</Typography>
			<Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
				A brief overview of the challenge, approach, and outcome.
			</Typography>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
					gap: 2,
					mb: 3,
				}}
			>
				<img
					src={`https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/evergreen-construction-ri/image${id}.JPG`}
					alt={`Project ${id}`}
					style={{ width: "100%", borderRadius: 12 }}
				/>
				<img
					src={`https://web-dev-business-client-sites.s3.us-east-2.amazonaws.com/evergreen-construction-ri/image${
						Number(id) + 1
					}.JPG`}
					alt={`Project ${id} - detail`}
					style={{ width: "100%", borderRadius: 12 }}
				/>
			</Box>
			<Divider sx={{ my: 3 }} />
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
					gap: 4,
				}}
			>
				<Box>
					<Typography variant="h6">Problem</Typography>
					<Typography color="text.secondary">
						Describe the client goal and constraints.
					</Typography>
				</Box>
				<Box>
					<Typography variant="h6">Solution</Typography>
					<Typography color="text.secondary">
						Outline the approach, materials, and craftsmanship.
					</Typography>
				</Box>
				<Box>
					<Typography variant="h6">Outcome</Typography>
					<Typography color="text.secondary">
						Summarize results and client satisfaction.
					</Typography>
				</Box>
				<Box>
					<Typography variant="h6">Project Facts</Typography>
					<Typography color="text.secondary">
						Sqft, timeline, location, budget range.
					</Typography>
				</Box>
			</Box>
		</Container>
	)
}

export default CaseStudy
