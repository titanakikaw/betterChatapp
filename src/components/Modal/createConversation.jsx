import { Modal, Typography, Input, Avatar, Select } from 'antd'
import { PictureOutlined } from '@ant-design/icons'
import React from 'react'

const { Text, Title } = Typography

const children = []
   
for (let i = 10; i < 36; i++) {
   children.push(<Select.Option key={i.toString(36) + i}>{i.toString(36) + i}</Select.Option>);
}
const NewConvoModal = ({open, setModal}) => {
   
   return (
      <Modal open={open} title="New Conversation" onCancel={() => setModal(!open)} style={{textAlign:'center'}}>
         <Avatar size={64} icon={<PictureOutlined />}/>
         <br/>
         <br/>
         <Text>Conversation Name:<Input/></Text>
         <Text>Add Members:</Text>
         <br></br>
         <Select mode='tags' placeholder="Please enter name" style={{width:'100%'}}>{children}</Select>
      </Modal>
   )
}

export default NewConvoModal