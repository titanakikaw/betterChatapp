import React from 'react'
import { Modal, Typography, List, Button, Input } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
const { Text } = Typography

const RoomModal = ({roomModal, setModal}) => {
   return (
      <Modal title="Room Information" open={roomModal} onCancel={() => setModal(!roomModal)} >
         <p><span style={{fontWeight:'bold'}}>Name:</span> Room Name</p>
         <p><span style={{fontWeight:'bold'}}>Date created:</span> 2020-01-01</p>
         <p><span style={{fontWeight:'bold'}}>Add member:</span></p>
         <Input placeholder='Please enter email'/>
         <p><span style={{fontWeight:'bold'}}>Current members:</span></p>
         <List style={{ overflowY:'scroll', height:'250px', padding:'5px 10px', backgroundColor:'#f3f3f3', borderRadius:'8px'}}>
            <List.Item.Meta
               avatar = { <UserAddOutlined style={{fontSize:'20px'}}/> }
               title={"test"}
               description={"test@email.com"}
               style={{backgroundColor:'white', padding:'10px 1rem'}}
            />
            <List.Item.Meta
               avatar = { <UserAddOutlined style={{fontSize:'20px'}}/> }
               title={"test"}
               description={"test@email.com"}
               style={{backgroundColor:'white', padding:'10px 1rem'}}
            />
            <List.Item.Meta
               avatar = { <UserAddOutlined style={{fontSize:'20px'}}/> }
               title={"test"}
               description={"test@email.com"}
               style={{backgroundColor:'white', padding:'10px 1rem'}}
            />
            <List.Item.Meta
               avatar = { <UserAddOutlined style={{fontSize:'20px'}}/> }
               title={"test"}
               description={"test@email.com"}
               style={{backgroundColor:'white', padding:'10px 1rem'}}
            />
            <List.Item.Meta
               avatar = { <UserAddOutlined style={{fontSize:'20px'}}/> }
               title={"test"}
               description={"test@email.com"}
               style={{backgroundColor:'white', padding:'10px 1rem'}}
            />
            <List.Item.Meta
               avatar = { <UserAddOutlined style={{fontSize:'20px'}}/> }
               title={"test"}
               description={"test@email.com"}
               style={{backgroundColor:'white', padding:'10px 1rem'}}
            />
         </List>
      </Modal>
   )
}

export default RoomModal