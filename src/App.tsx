import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import "./App.css"

import Home from "./application/home/Home"
import ColorPalette from "./application/design/ColorPalette"
import NotFound from "./application/NotFound"
import Portfolio from "./application/portfolio/Portfolio"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/design/color-palette" element={<ColorPalette />} />
								

					{/* TODO: Add these components */}
					{/* <Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogPost />} />
					<Route path="/customer-portal" element={<CustomerPortal />} /> */}


				</Routes>
			</>
		)

	}

	export default App
