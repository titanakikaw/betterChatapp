import React from 'react'
import { Divider, Layout, Menu } from 'antd'
import { UserOutlined,HighlightOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Typography, Input } from 'antd';


const { Search } = Input;
const { Content, Sider, Header, Footer } = Layout
const { Text, Title } = Typography
const App = () => {
  return (
    <React.Fragment>
      <Layout style={{height:'100vh'}}>
        <Header style={{height:'55px'}}>
        </Header>
        <Layout>
          <Sider width={350} style={{backgroundColor:'#f3f3f3', borderRight:'1px solid grey'}}>
            <div style={{display:'flex', alignItems: 'center', height: '55px', padding: '0 1.2rem', justifyContent:'space-between'}}>
              <Title level={4} style={{margin:'0px', fontWeight:'bold'}}>Chat</Title>
              <div>
                <Avatar icon={<UserAddOutlined />} style={{marginRight:'5px', cursor:'pointer'}}/>
                <Avatar icon={<HighlightOutlined/>} style={{backgroundColor:'#001529', cursor:'pointer'}}/>
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
          <Content>
            <Header style={{height:'55px', backgroundColor:'white'}}>
              <Title level={3} style={{marginBottom:'0px', lineHeight:'50px'}}>Sample</Title>
            </Header>
            <Content style={{padding:'0 3rem'}}>
              test
            </Content>
            <Footer>
              <Search placeholder="input search text" enterButton />

            </Footer>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>

  )
}

export default App