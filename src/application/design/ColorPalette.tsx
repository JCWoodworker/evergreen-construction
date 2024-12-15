import React from "react"
import { Box, Divider, Typography } from "@mui/material"
import ColorPaletteExamples from "./ColorPaletteExamples"

const ColorPalette: React.FC = () => {
	const colorData = [
		{
			name: "Deep Forest Green",
			hex: "#004338",
			usage: "Logo, headers, call-to-action buttons, accent elements",
		},
		{
			name: "Warm Gray",
			hex: "#757575",
			usage: "Body text, section dividers, backgrounds for CTAs",
		},
		{
			name: "Natural Beige",
			hex: "#E8E2D5",
			usage: "Backgrounds, alternating sections with white",
		},
		{
			name: "Sky Blue",
			hex: "#CAEBF2",
			usage: "Links, icons, highlighting key information",
		},
		{
			name: "Off-White",
			hex: "#F8F8F7",
			usage: "Main background, whitespace",
		},
	]

	return (
		<Box>
			<Typography variant="h2">Evergreen Construction Color Palette</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
				{colorData.map((color) => (
					<Box
						key={color.hex}
						sx={{
							width: "400px",
							margin: "10px",
							padding: "20px",
							backgroundColor: color.hex,
							color: color.hex === "#004338" ? "white" : "black", // White text for dark green
							borderRadius: "8px",
							boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						}}
					>
						<Typography variant="h5">{color.name}</Typography>
						<Typography variant="body1">{color.hex}</Typography>
						<Typography variant="body2">{color.usage}</Typography>
					</Box>
				))}
			</Box>
			<Divider sx={{ borderColor: "#757575", margin: "20px 0" }} />
			<ColorPaletteExamples />
		</Box>
	)
}

export default ColorPalette
