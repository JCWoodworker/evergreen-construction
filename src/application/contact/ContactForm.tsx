import { Button, TextField, Typography } from "@mui/material"
import {
	useForm,
	ValidationError,
} from "@formspree/react"

function Contact() {
	const [state, handleSubmit] = useForm("xwpkderv")
	if (state.succeeded) {
		alert("Thank you for contacting us!")
		window.location.href = "/";
	}
	return (
		<form onSubmit={handleSubmit}>
			<Typography variant="h4" gutterBottom>
				Contact Us
			</Typography>
			<TextField
				id="email"
				label="Email Address"
				type="email"
				name="email"
				fullWidth
				margin="normal"
				variant="outlined"
			/>
			<ValidationError prefix="Email" field="email" errors={state.errors} />
			<TextField
				id="message"
				label="Message"
				name="message"
				multiline
				rows={4}
				fullWidth
				margin="normal"
				variant="outlined"
			/>
			<ValidationError prefix="Message" field="message" errors={state.errors} />
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
	)
}

export default Contact
