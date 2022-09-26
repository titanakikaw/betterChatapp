import { createContext, useState } from "react";
import { logInWithGoogle } from "../services/firebase";


const AuthContext = createContext();

const AuthProvider = (props) => {
   const [userState, setUserState] = useState();

   const logInWithGoogleAuth = async() => {
      const user  = await logInWithGoogle()
      if(!user){
         console.log('Failed to login!')
      }
      setUserState(user)
   }

   const logInWithCredentials = () => {

   }
   const value = { userState, logInWithGoogleAuth}
   return  <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}


export { AuthContext, AuthProvider}

