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
			sx={{
				mx: { xs: 1, md: 2 },
				my: { xs: 2, md: 2 },
				minWidth: 220,
				height: 56,
				px: 3,
			}}
			onClick={() => navigate(pageLink)}
		>
			{buttonText}
		</Button>
	)
}

export default PageLinkButton
