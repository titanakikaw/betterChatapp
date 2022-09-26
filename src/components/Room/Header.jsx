import React from 'react'
import { Typography, Layout, Popconfirm } from 'antd'
import { InfoCircleOutlined, ExportOutlined } from '@ant-design/icons'
const { Title } = Typography
const HeaderRoomComponent = ({setModal}) => {
   return (
      <Layout.Header style={{height:'55px', backgroundColor:'white', display:'flex', justifyContent:'space-between'}}>
         <div>
            <Title level={4} style={{marginBottom:'0px', lineHeight:'50px'}}>Sample</Title>
         </div>
         <div>
            <InfoCircleOutlined style={{fontSize:'1.5rem', marginRight:'10px', cursor:'pointer'}} onClick={() => setModal(true)}/>
            <Popconfirm
               title="Are you sure you want to leave conversation ?"
               okText="Yes"
               cancelText="No"
            >
               <ExportOutlined style={{fontSize:'1.5rem', marginRight:'10px', cursor:'pointer'}} />
            </Popconfirm>
         </div>
     
      </Layout.Header>
   )
}

export default HeaderRoomComponent