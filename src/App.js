import React from 'react'
import Navigation from './nav'
function Header() {
	localStorage.setItem('loggedin', false)
	return (
		<header className="text-gray-600 body-font">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<a
					href="/"
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl">Kalyan Agencies</span>
				</a>
				<Navigation />
			</div>
		</header>
	)
}

function App() {
	return (
		<div>
			<Header />
		</div>
	)
}

export default App
