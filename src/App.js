import React, { useContext, useState } from 'react'
import { Divider, Layout, Typography, Input  } from 'antd'
import { AppBar } from './components/appBar';
import Navbar from './components/navbar';
import Room from './pages/Room';
import NewConvoModal from './components/Modal/createConversation';
import { Route, Routes } from 'react-router-dom';
import Unathenticated from './pages/Unathenticated';
import { AuthContext } from './context/authContext';
const { Content, Sider, Header, Footer } = Layout
const { Text, Title } = Typography

const Authenticated = () => {
    const [newMsgModal, setNewMsgModal] = useState(false)
  return(
    <React.Fragment>
      <Layout style={{height:'100vh'}}>
        <Navbar/>
        <Layout>
          <AppBar setModal={setNewMsgModal}/>
          <Routes>
            <Route path="/room/:id" element={<Room/>} />
          </Routes>
        </Layout>
      </Layout>
      <NewConvoModal open={newMsgModal} setModal={setNewMsgModal}/>
    </React.Fragment>
  )
}


const App = () => {
  const { userState } = useContext(AuthContext)

  return (
    <div className='App'>
    {
      userState ? <Authenticated/> : <Unathenticated/>
    }
    </div>

      
  )
}

export default App