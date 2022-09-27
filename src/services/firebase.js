import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, getFirestore, onSnapshot, serverTimestamp, query, orderBy, getDocs, where, getDoc, doc, updateDoc, setDoc, Timestamp} from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { useState } from 'react'

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
      if(!await userExist(user.email)){
         const newUser = {
            uid: user.uid,
            user : user.email,
            displayName : user.displayName,
            phoneNumber : user.phoneNumber,
            photoUrl : user.photoURL
         }
         newDocument('users', newUser) 
      }
      return user
   } catch (error) {
      console.log(error)
      return null
   }
}
async function autoNewDocument(docx, dataObject){
   try {
      const docRef = await addDoc(collection(db, docx), dataObject)
   } catch (error) {
      console.log(error)
   }
}

async function newDocument(docx, dataObject){
   try {
      const docRef = await setDoc(doc(db, docx, dataObject.uid ), dataObject)
   } catch (error) {
      console.log(error)
      return null
   }
}
async function getDocument(docx){
   try {
      const { docs } = await getDocs(collection(db, docx))
      const data = docs.map((doc) => ({
         id : doc.id,
         ...doc.data()
      }))
      return data
   } catch (error) {
      console.log(error)
      return null
   }
}
async function getDocsWithCondition(docx, refTarget, refValue){
   try{
      const data = []
      const query1 = query(collection(db,docx), where(refTarget, "array-contains", refValue))
      const snapShot = await getDocs(query1);
      snapShot.forEach((xdata) => {
         data.push(xdata.data())
      })
      return data
   }catch(error){
      console.log(error)
      return null
   }
}

async function userExist(email){
   try {
      const q = query(collection(db, 'users'), where("user", "==", email))
      const snapShot = await getDocs(q)
      let status= false;
      snapShot.forEach((doc) => {
         if(doc.exists()){
            status = true
         }
      })
      return status
   } catch (error) {
      console.log(error)
   }
}

async function getAvailableUser(currentUser){
   try {
      const data = []
      const query1 = query(collection(db,'users'), where('user', '!=', currentUser))
      const snapShot = await getDocs(query1);
      snapShot.forEach((xdata) => {
         data.push(xdata.data())
      })
      return data
   } catch (error) {
      console.log(error)
      return null
   }
}
export { logInWithGoogle, newDocument, getDocument, getAvailableUser, autoNewDocument, getDocsWithCondition }