import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { seedDatabase } from '../seed'

// delete config later?
const config = {
  apiKey: 'AIzaSyBZjZ3T1PqzzXknrt23hXZVHX7F7objo-E',
  authDomain: 'instagram-dbef5.firebaseapp.com',
  projectId: 'instagram-dbef5',
  storageBucket: 'instagram-dbef5.appspot.com',
  messagingSenderId: '229851722508',
  appId: '1:229851722508:web:2cbda65b89b996e3b7cf29'
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

console.log('firebase', firebase)

export { firebase, FieldValue }
