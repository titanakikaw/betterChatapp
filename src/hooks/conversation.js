import { Timestamp } from "firebase/firestore";
import { AuthContext } from "../context/authContext";
import { autoNewDocument, getDocsWithCondition } from "../services/firebase"
import { serverTimestamp } from "firebase/firestore";



function NEW_CONVERSATION(name, members){
   const convo = {
      name,
      members,
      recentMsg : 'test',
      createAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
   } 
   autoNewDocument('conversations', convo)
}

async function getConversations(id){
   return await getDocsWithCondition('conversations', 'members', id)
}

export { NEW_CONVERSATION, getConversations }