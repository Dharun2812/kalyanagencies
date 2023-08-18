// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAvltj-c3aExJkYARxv_TaSFCUJEOh78Wo',
	authDomain: 'kalyanagencies-84085.firebaseapp.com',
	projectId: 'kalyanagencies-84085',
	storageBucket: 'kalyanagencies-84085.appspot.com',
	messagingSenderId: '466593475522',
	appId: '1:466593475522:web:f022783d1e64c8d963445b',
	measurementId: 'G-43TL54ER50',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const firestore = getFirestore(app)
