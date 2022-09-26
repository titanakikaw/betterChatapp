import React, { useContext } from 'react'
import { Layout, Input, Avatar, Col, Row, Image, Typography } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import UserMenu from './navbar/userMenu'
import { AuthContext } from '../context/authContext'
const { Header } = Layout
const { Title } = Typography
const Navbar = () => {
  const { userState } = useContext(AuthContext)
  return (
    <Header style={{height:'55px'}}>
      <Row>
        <Col span={6}>
          <Title level={2} style={{marginTop:'5px', fontWeight:'bold', color:'white'}}>
          
          </Title>
        </Col>
        <Col span={12}>
          <Input.Search style={{marginTop:'10px'}} placeholder={"Search Conversation"}/>
        </Col>
        <Col span={6} style={{display:'flex', justifyContent:'right'}}>
          <Avatar src={<Image src={userState.photoURL} style={{ width: 32 }} />}  style={{marginTop:'10px'}}/>
          <UserMenu/>
        </Col>
      </Row>
    </Header>
  )
}

export default Navbar