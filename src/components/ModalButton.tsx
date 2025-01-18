import { Button } from "@mui/material"

const ModalButton = ({
	buttonText,
	setModalOpen,
}: {
	buttonText: string
	setModalOpen: (open: boolean) => void
}) => {
	return (
		<Button
			variant="contained"
			color="primary"
			sx={{ margin: { xs: 1, md: 4 }, padding: 2, backgroundColor: "#004338" }}
			onClick={() => setModalOpen(true)}
		>
			{buttonText}
		</Button>
	)
}

export default ModalButton