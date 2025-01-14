import { Button } from "@mui/material"

const FreeEstimateButton = ({
	setEstimateModalOpen,
}: {
	setEstimateModalOpen: (open: boolean) => void
}) => {
	return (
		<Button
			variant="contained"
			color="primary"
			sx={{ margin: 4, backgroundColor: "#004338" }}
			onClick={() => setEstimateModalOpen(true)}
		>
			Get a Free Estimate
		</Button>
	)
}

export default FreeEstimateButton
