import React, { useState } from 'react'
import { Layout, Typography, Input } from 'antd'
import HeaderRoomComponent from '../components/Room/Header'
import ContentRoomComponent from '../components/Room/Content';
import InputRoomComponent from '../components/Room/Input';
import RoomModal from '../components/Modal/roomModal';
const { Content, Header, Footer } = Layout
const { TextArea  } = Input;



const Room = () => {
  const [roomModal, setRoomModal] = useState(false)

  return (
    <>
    <Content>
      <HeaderRoomComponent setModal={setRoomModal}/>
      <ContentRoomComponent/>
      <InputRoomComponent/>
    </Content>
    <RoomModal roomModal={roomModal} setModal={setRoomModal}/>
    </>
  )
}

export default Room