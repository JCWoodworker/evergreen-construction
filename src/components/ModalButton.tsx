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
				mx: { xs: 0, sm: 1, md: 2 },
				my: { xs: 1, sm: 2 },
				width: { xs: "100%", sm: "auto" },
				minWidth: { xs: "auto", sm: 220 },
				height: { xs: 48, sm: 56 },
				px: { xs: 2, sm: 3 },
			}}
			onClick={() => setModalOpen(true)}
		>
			{buttonText}
		</Button>
	)
}

export default ModalButton
