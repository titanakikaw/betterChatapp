import { Modal, Typography, Input, Avatar, Select } from 'antd'
import { ConsoleSqlOutlined, PictureOutlined } from '@ant-design/icons'
import { newDocument } from '../../services/firebase'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/authContext'
import { NEW_CONVERSATION } from '../../hooks/conversation'
 
const { Text, Title } = Typography
const NewConvoModal = ({open, setModal}) => {
   const { userState, users, getAvailableUsers } = useContext(AuthContext)
   const [name, setName] = useState();
   const [members, setMembers] = useState();

   const handleCreate = () => {
      NEW_CONVERSATION(name, members)
      setModal(!open)
   }

   const handleMembers = (e) => {
      let memberArr = e
      memberArr.push(userState.uid)
      setMembers(memberArr)
   }
  
   const handleName = (e) => {
      setName(e.target.value)
   }
    
   useEffect(() => {
      getAvailableUsers()
   }, [])
 
   return (
      <Modal open={open} title="New Conversation" onCancel={() => setModal(!open)} style={{textAlign:'center'}} onOk={() => handleCreate()}>
         <Avatar size={64} icon={<PictureOutlined />}/>
         <br/>
         <br/>
         <Text>Conversation Name:<Input onChange={(e)=> setName(e.target.value)} /></Text>
         <Text>Add Members:</Text>
         <br></br>
         <Select 
            mode='multiple' 
            allowClear 
            placeholder="Please enter name" 
            style={{width:'100%'}} 
            onChange={(e)=> handleMembers(e)}
         >
            {
               users ? users.map((user) => {
                  return <Select.Option key={user.uid} >{user.displayName}</Select.Option>
               }) : console.log('loading')
            }
         </Select>
      </Modal>
   )
}

export default NewConvoModal