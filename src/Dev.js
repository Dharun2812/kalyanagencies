import React from 'react'
import dev from './Photos/developer.jpeg'
const Developer = () => {
	const price = 'Rs 750'

	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt="ecommerce"
						className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						src={dev}
					/>
					<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
						<h2 className="text-sm title-font text-gray-500 tracking-widest">
							Bromide Chemicals
						</h2>
						<h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
							Bromax Developer
						</h1>
						<div className="flex mb-4">{/* Rating icons */}</div>
						<p className="leading-relaxed">
							X Ray Chemicals - X-Ray Developers, Fixers & Replenishers. Our
							developer solutions are compatible with all brands of imaging film
							and 45-, 90-, and 180-second process cycles.
						</p>
						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
							<div className="flex"></div>
							<div className="flex ml-6 items-center">
								<div className="relative"></div>
							</div>
						</div>
						<div className="flex">
							<span
								id="priceSpan"
								className="title-font font-medium text-2xl text-gray-900">
								{price}
							</span>
							<button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24">
									{/* SVG path */}
									<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Developer
