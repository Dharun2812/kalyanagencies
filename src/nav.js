import React, { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
} from 'react-router-dom'
import HomePage from './HomePage' // Replace with the actual path to your HomePage component
import ContactPage from './ContactPage' // Replace with the actual path to your ContactPage component
import AboutPage from './AboutPage' // Replace with the actual path to your AboutPage component
import SignUpPage from './SignUpPage' // Replace with the actual path to your SignUpPage component
import ProductPage from './ProductPage'
import Green from './GreenSensitive'
import GreenDigital from './GreenDigital'
import BlueDigital from './BlueDigi'
import Blue from './Blue'
import Dental from './Dental'
import Sony from './Sony'
import Fixer from './Fixer'
import Dev from './Dev'
function Navigation() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/signup" element={<SignUpPage />} />
					<Route path="/products" element={<ProductPage />} />
					<Route path="/products/GreenDigital" element={<GreenDigital />} />
					<Route path="/products/BlueDigital" element={<BlueDigital />} />
					<Route path="/products/GreenSensitive" element={<Green />} />
					<Route path="/products/BlueSensitive" element={<Blue />} />
					<Route path="/products/Dental" element={<Dental />} />
					<Route path="/products/Sony" element={<Sony />} />
					<Route path="/products/Fixer" element={<Fixer />} />
					<Route path="/products/Developer" element={<Dev />} />
				</Route>
			</Routes>
		</Router>
	)
}
const Layout = () => {
	const [loggedIn, setLog] = useState(false)
	useEffect(() => {
		if (localStorage.getItem('loggedIn') === true) {
			setLog(true)
		}
	}, [])
	return (
		<>
			<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
				<Link to="/" className="mr-5 hover:text-gray-900">
					Home
				</Link>
				<Link to="/contact" className="mr-5 hover:text-gray-900">
					Contact
				</Link>
				<Link to="/about" className="mr-5 hover:text-gray-900">
					About
				</Link>
				{loggedIn === true ? (
					<Link
						to="/signup"
						className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-5 hover:text-gray-900">
						Sign Up
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							class="w-4 h-4 ml-1"
							viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</Link>
				) : (
					<Link to="/products" className="mr-5 hover:text-gray-900">
						Products
					</Link>
				)}
			</nav>
			<Outlet />
		</>
	)
}

export default Navigation
