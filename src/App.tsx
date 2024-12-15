import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import "./App.css"

import Home from "./application/home/Home"
import ContactForm from "./application/contact/ContactForm"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<ContactForm />} />

				{/* TODO: Add these components */}
				{/* <Route path="/about" element={<About />} />
				<Route path="/services" element={<Services />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:id" element={<BlogPost />} />
				<Route path="/customer-portal" element={<CustomerPortal />} /> */}

			</Routes>
		</>
	)

}

export default App
