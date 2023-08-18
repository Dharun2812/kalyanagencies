import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { firestore } from './firebaseConfig'
import { collection, getDocs, addDoc } from 'firebase/firestore'

function SignUpPage() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const formsubmit = async () => {
		var isPreviousUser = false
		const querySnapshot = await getDocs(collection(firestore, 'users'))
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, ' => ', doc.data())
			const userData = doc.data()
			if (userData.username === username) {
				isPreviousUser = true
				if (userData.password !== password) {
					alert('Incorrect password.')
					return
				}
				alert('Logged in successfully.')
				navigate('/products')
				return
			}
		})

		// Add user data to Firestore
		if (!isPreviousUser) {
			const docRef = await addDoc(collection(firestore, 'users'), {
				username: username,
				password: password,
			})

			alert('User registered successfully.', docRef)
			localStorage.setItem('loggedIn', true)
			navigate('/products')
		}
	}
	useEffect(() => {
		document.body.classList.add('signup')
		return () => {
			document.body.classList.remove('signup')
		}
	}, [])

	return (
		<section className="text-gray-600 w-full body-font">
			<div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
				<div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
					<h1 className="title-font font-medium text-3xl text-gray-900">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kalyan Agencies
					</h1>
					<p className="leading-relaxed mt-4">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Exploring
						exclusive products by making a free account
					</p>
				</div>
				<div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
					<h2 className="text-gray-900 text-lg font-medium title-font mb-5">
						Sign Up
					</h2>
					<div className="relative mb-4">
						<label
							htmlFor="username"
							className="leading-7 text-sm text-gray-600">
							Username
						</label>
						<input
							type="text"
							id="username"
							name="username"
							value={username}
							onChange={(event) => setUsername(event.target.value)}
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="password"
							className="leading-7 text-sm text-gray-600">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(event) => setPassword(event.target.value)}
							className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
					<button
						onClick={formsubmit}
						className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
						Sign Up
					</button>
					<p className="text-xs text-gray-500 mt-3"></p>
				</div>
			</div>
		</section>
	)
}

export default SignUpPage
