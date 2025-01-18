import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const PageLinkButton = ({
	buttonText,
	pageLink,
}: {
	buttonText: string
	pageLink: string
}) => {
	const navigate = useNavigate()
	return (
		<Button
			variant="contained"
			color="primary"
			sx={{ margin: { xs: 1, md: 4 }, padding: 2, backgroundColor: "#004338" }}
			onClick={() => navigate(pageLink)}
		>
			{buttonText}
		</Button>
	)
}

export default PageLinkButton
