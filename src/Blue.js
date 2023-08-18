import React, { useState } from 'react'
import blue from './Photos/blue.jpg'
const Blue = () => {
	const [selectedSize, setSelectedSize] = useState('')
	const priceMap = {
		'8*10': 6500,
		'10*12': 7300,
		'12*15': 8000,
		'14*17': 9500,
	}

	const handleSizeChange = (event) => {
		setSelectedSize(event.target.value)
	}

	return (
		<section className="text-gray-600 body-font overflow-hidden">
			{/* Rest of the HTML code */}
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt="ecommerce"
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						src={blue}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h2 className="text-sm title-font text-gray-500 tracking-widest">
							FUJIFILM
						</h2>
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
							Blue Sensitive Film{' '}
						</h1>
						<div className="flex mb-4">
							<span className="flex items-center">
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-blue-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-blue-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-blue-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-blue-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-blue-500"
									viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<span className="text-gray-600 ml-3"></span>
							</span>
							<span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s"></span>
						</div>
						<p className="leading-relaxed">
							Full speed general purpose blue sensitive x-ray film for use with
							rare earth green emitting screens or calcium tungstat screens.
							General purpose full speed blue sensitive x-ray film for use with
							rare earth blue emitting screens or calcium tungstat screens. Sold
							in 80 sheet boxes.
						</p>
						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
							<div className="flex"></div>
							<div className="flex ml-6 items-center">
								<span className="mr-3">Size</span>
								<div className="relative">
									<select
										id="sizeSelect"
										className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10"
										value={selectedSize}
										onChange={handleSizeChange}>
										<option value="" disabled>
											Select Size
										</option>
										<option value="8*10">8*10</option>
										<option value="10*12">10*12</option>
										<option value="12*15">12*15</option>
										<option value="14*17">14*17</option>
									</select>
									{/* Rest of the HTML code */}
									<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4"
											viewBox="0 0 24 24">
											<path d="M6 9l6 6 6-6"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
						<div className="flex">
							<span
								id="priceSpan"
								className="title-font font-medium text-2xl text-gray-900">
								{priceMap[selectedSize]
									? `Rs ${priceMap[selectedSize]}`
									: 'Price not available'}
							</span>
							<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>

									{/* SVG path */}
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blue
