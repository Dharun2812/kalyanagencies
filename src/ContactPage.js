import React, { useState } from 'react'
import { firestore as db } from './firebaseConfig' // Import your Firebase setup
import { addDoc, collection } from 'firebase/firestore'

function ContactPage() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const docid = await addDoc(collection(db, 'queries'), {
				name: name,
				email: email,
				message: message,
				timestamp: new Date(),
			})

			// Reset form fields
			setName('')
			setEmail('')
			setMessage('')

			alert('Your message has been submitted successfully!', docid)
		} catch (error) {
			console.error('Error submitting message:', error)
			alert('An error occurred. Please try again later.')
		}
	}

	return (
		<section className="text-gray-600 w-full body-font relative">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-12">
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
						Contact Us
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
						Feel free to ask anything about business
					</p>
				</div>
				<div className="lg:w-1/2 md:w-2/3 mx-auto">
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={name}
									onChange={(e) => {
										setName(e.target.value)
									}}
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-1/2">
							{/* ... */}
							<div className="relative">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								/>
							</div>
						</div>
						<div className="p-2 w-full">
							<div className="relative">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									value={message}
									onChange={(e) => setMessage(e.target.value)}></textarea>
							</div>
						</div>
						<div className="p-2 w-full">
							<button
								type="submit"
								className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
								onClick={handleSubmit}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactPage
