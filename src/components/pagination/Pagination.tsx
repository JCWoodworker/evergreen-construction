import { Box, Typography, Button } from "@mui/material"
import PaginationButton from "./PaginationButton"

const Pagination = ({
	currentPage,
	setCurrentPage,
	totalPages,
}: {
	currentPage: number
	setCurrentPage: (page: number) => void
	totalPages: number
}) => {
	return (
		<>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<PaginationButton
					title="Previous"
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					totalPages={totalPages}
				/>
				<Typography sx={{ margin: "0 1rem" }}>
					Page {currentPage} of {totalPages}
				</Typography>
				<PaginationButton
					title="Next"
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					totalPages={totalPages}
				/>
			</Box>
			<Box sx={{ marginTop: 2 }}>
				{Array.from({ length: totalPages }, (_, i) => (
					<Button
						key={i}
						onClick={() => setCurrentPage(i + 1)}
						variant={currentPage === i + 1 ? "contained" : "outlined"}
						sx={{ margin: "0 2px" }}
					>
						{i + 1}
					</Button>
				))}
			</Box>
		</>
	)
}

export default Pagination
