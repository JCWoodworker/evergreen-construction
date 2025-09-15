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
			sx={{
				mx: { xs: 1, md: 2 },
				my: { xs: 2, md: 2 },
				minWidth: 220,
				height: 56,
				px: 3,
			}}
			onClick={() => setModalOpen(true)}
		>
			{buttonText}
		</Button>
	)
}

export default ModalButton
