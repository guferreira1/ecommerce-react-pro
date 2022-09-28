import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCsRG20OJ4EJBCjz54y2Jtb2pfNXnwyIr8',
  authDomain: 'ecommerce-react-pro.firebaseapp.com',
  projectId: 'ecommerce-react-pro',
  storageBucket: 'ecommerce-react-pro.appspot.com',
  messagingSenderId: '765114197093',
  appId: '1:765114197093:web:b5c4c12bdfb6e3bd65128c'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
