import React from 'react'
import { DashOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd'

const menu = (
   <Menu
     items={[
       {
         label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
               My Profile
            </a>
         ),
         key: '0',
       },
       {
         label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
               Logout    
            </a>
         ),
         key: '1',
       },
     ]}
   />
 );


const UserMenu = () => {
   return (
      <Dropdown overlay={menu}>
         
         <Space style={{marginLeft:'1rem', lineHeight:'55px', cursor:'pointer'}}>
            <DashOutlined style={{color:'white'}} />
         </Space>
      
      </Dropdown>
   )
}

export default UserMenu