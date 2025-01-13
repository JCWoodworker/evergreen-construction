import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import "./App.css"

import Home from "./application/home/Home"
import ContactForm from "./application/contact/ContactForm"
import ColorPalette from "./application/design/ColorPalette"
import NotFound from "./application/NotFound"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactForm />} />
				<Route path="*" element={<NotFound />} />
								

					{/* TODO: Add these components */}
					{/* <Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogPost />} />
					<Route path="/customer-portal" element={<CustomerPortal />} /> */}

					<Route path="/design/color-palette" element={<ColorPalette />} />

				</Routes>
			</>
		)

	}

	export default App
