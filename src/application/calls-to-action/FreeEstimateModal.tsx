import {
	Button,
	TextField,
	Typography,
	Modal,
	IconButton,
	Box,
} from "@mui/material"
import { useForm, ValidationError } from "@formspree/react"
import { Close } from "@mui/icons-material"

function FreeEstimateModal({
	open,
	handleClose,
}: {
	open: boolean
	handleClose: () => void
}) {
	const [state, handleSubmit] = useForm("manygybq")
	if (state.succeeded) {
		alert("Thank you for contacting us.  We'll be in touch soon!")
		handleClose()
	}

	const fieldStyle = {
		backgroundColor: "#FFF",
		borderRadius: "5px",
		"& .MuiInputLabel-root.Mui-focused": {
			padding: "2px 10px",
			color: "rgba(0, 0, 0, 0.6)",
			backgroundColor: "#FFF", 
			borderRadius: "5px",
			border: "2px solid #D3D3D3",
			boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
		},
	}

	return (
		<Modal
			open={open}
			onClose={handleClose}
			sx={{
				backgroundColor: "#004338",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box sx={{ position: "relative" }}>
				<IconButton
					onClick={handleClose}
					sx={{
						position: { xs: "absolute", md: "absolute" },
						top: { xs: 10, md: 10 },
						right: { xs: 10, md: 10 },
						color: "#FFFFFF",
					}}
				>
					<Close />
				</IconButton>
				<Typography
					variant="h4"
					gutterBottom
					sx={{
						color: "#FFFFFF",
						textAlign: "center",
						marginTop: { xs: 5, md: 0 },
					}}
				>
					Get a Free Estimate
				</Typography>
				<form
					onSubmit={handleSubmit}
					style={{ padding: "16px", maxWidth: "500px", margin: "0 auto" }}
				>
					<TextField
						id="email"
						label="Your Email Address"
						type="email"
						name="email"
						fullWidth
						margin="normal"
						variant="outlined"
						sx={fieldStyle}
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<TextField
						id="message"
						label="Describe your project"
						name="message"
						multiline
						rows={8}
						fullWidth
						margin="normal"
						variant="outlined"
						sx={fieldStyle}
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<Button
						type="submit"
						disabled={state.submitting}
						variant="contained"
						color="primary"
						sx={{
							backgroundColor: "#004338",
							color: "white",
							marginTop: "10px",
						}}
					>
						Submit
					</Button>
				</form>
			</Box>
		</Modal>
	)
}

export default FreeEstimateModal
