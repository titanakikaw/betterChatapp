import { createContext, useState } from "react";
import { getAvailableUser, logInWithGoogle } from "../services/firebase";


const AuthContext = createContext();

const AuthProvider = (props) => {
   const [userState, setUserState] = useState();
   const [users, setUsers] = useState()

   const logInWithGoogleAuth = async() => {
      const user  = await logInWithGoogle()
      if(!user){
         console.log('Failed to login!')
      }
      setUserState(user)
      // getAvailableUsers()
   }

   const getAvailableUsers = async() => [
      setUsers(await getAvailableUser(userState.email))
   ]
   const value = { userState, users, logInWithGoogleAuth, getAvailableUsers}
   return  <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}


export { AuthContext, AuthProvider}

