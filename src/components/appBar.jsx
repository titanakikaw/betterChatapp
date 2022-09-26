import React, { useContext } from 'react'
import { Layout, Menu, Typography, Avatar, Divider, Tooltip, Button } from 'antd'
import { UserOutlined,HighlightOutlined, UserAddOutlined } from '@ant-design/icons' 
import { AuthContext } from '../context/authContext'
const { Sider } = Layout 
const { Title, Text } = Typography
const AppBar = ({setModal}) => {

  const { userState } = useContext(AuthContext);
  console.log(userState)

  return (
    <Sider width={350} style={{backgroundColor:'white', borderRight:'1px solid grey'}}>
      <div style={{display:'flex', alignItems: 'center', height: '55px', padding: '0 1.2rem', justifyContent:'space-between'}}>
        <Title level={4} style={{margin:'0px', fontWeight:'bold'}}>Chat</Title>
        <div>
          <Avatar icon={<UserAddOutlined />} style={{marginRight:'5px', cursor:'pointer'}}/>
          <Avatar icon={<HighlightOutlined/>} style={{backgroundColor:'#001529', cursor:'pointer'}} onClick={() => setModal(true)}/>
        </div>
      </div>
      <Divider style={{margin:'0px'}}/>
      <Menu>
        <Menu.Item style={{display:'flex', alignItems: 'center', margin: '0 5px', height: '50px'}}>
          <Avatar icon={<UserOutlined />} style={{marginRight:'10px',marginBottom:'3px'}}/>
          <Text>New chat</Text>
        </Menu.Item>
        <Menu.Item style={{display:'flex', alignItems: 'center', margin: '0 5px', height: '50px'}}>
          <Avatar icon={<UserOutlined />} style={{marginRight:'10px',marginBottom:'3px'}}/>
          <Text>New chat</Text>
        </Menu.Item>
        <Menu.Item style={{display:'flex', alignItems: 'center', margin: '0 5px', height: '50px'}}>
          <Avatar icon={<UserOutlined />} style={{marginRight:'10px',marginBottom:'3px'}}/>
          <Text>New chat</Text>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
export { AppBar }