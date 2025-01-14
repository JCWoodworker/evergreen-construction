import { Button } from "@mui/material"

const ContactButton = ({
	setContactModalOpen,
}: {
	setContactModalOpen: (open: boolean) => void
}) => {
	return (
		<Button
			variant="contained"
			color="primary"
			sx={{ margin: 4, backgroundColor: "#004338" }}
			onClick={() => setContactModalOpen(true)}
		>
			Contact Greg Directly
		</Button>
	)
}

export default ContactButton
