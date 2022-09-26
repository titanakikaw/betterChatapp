import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getFirestore, onSnapshot, serverTimestamp, query, orderBy, getDocs, where, getDoc, doc, updateDoc} from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
   apiKey: "AIzaSyBtRSMnZvHWgUD_OPf5avh5vow7K9ZmRdA",
   authDomain: "chatapp-4a570.firebaseapp.com",
   projectId: "chatapp-4a570",
   storageBucket: "chatapp-4a570.appspot.com",
   messagingSenderId: "189141016990",
   appId: "1:189141016990:web:5a8805e34f0450068b368f",
   measurementId: "G-9XKF9WV6HY"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function logInWithGoogle(){
   try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth()
      const { user }  = await signInWithPopup(auth, provider)
      return  user 
   } catch (error) {
      console.log(error)
      return null
   }
}

export { logInWithGoogle }