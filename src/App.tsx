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
			</Routes>
		</>
	)

}

export default App
