import React from 'react'
import { Link } from 'react-router-dom'
import { products } from './productDetails'
function ProductPage() {
	return (
		<section className="text-gray-600 body-font">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap -m-4">
					{products.map((each, index) => {
						return (
							<ProductBlock
								imageUrl={each.imageUrl}
								brand={each.brand}
								title={each.title}
								link={each.link}
								type={each.type}
								key={index}
							/>
						)
					})}
				</div>
			</div>
		</section>
	)
}

// Product block component
function ProductBlock({ imageUrl, brand, title, link, type }) {
	return (
		<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
			<div className="block relative h-48 rounded overflow-hidden">
				<img
					alt="ecommerce"
					className="object-cover object-center w-full h-full block"
					src={imageUrl}
				/>
			</div>
			<div className="mt-4">
				<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
					{brand}
				</h3>
				<Link to={link} className="mr-5 hover:text-gray-900">
					{title}
				</Link>
				<p className="mt-1">{type}</p>
			</div>
		</div>
	)
}

export default ProductPage
