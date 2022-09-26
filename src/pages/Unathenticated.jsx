import { Button, Input, Typography } from 'antd'
import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { GoogleCircleFilled, RocketOutlined } from '@ant-design/icons'

const { Text } = Typography

const Unathenticated = () => {
   const { logInWithGoogleAuth } = useContext(AuthContext)
   return (
      <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
         <div style={{ padding:'1rem'}}>
            <div className='form_input'>
               <Text>Email :</Text>
               <Input></Input>
            </div>    
            <div className='form_input'>
               <Text>Password :</Text>
               <Input.Password></Input.Password>
            </div>
            <a href=''>Do not have an account ? Register here</a>
            <Button type='primary' icon={<RocketOutlined
               style={{
                  color:'white', 
                  fontSize:'20px',
               }} />}
               style={{
                  color:'white', 
                  fontSize:'12px', 
                  width:'100%',
                  marginTop:'10px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
               }}>
               Log In
            </Button>
            <Button 
               onClick={() => logInWithGoogleAuth()}
               icon= {<GoogleCircleFilled
                        style={{
                           color:'white', 
                           fontSize:'20px',
                        }}/>
                     }
               style={{
                  backgroundColor: '#D4353F',
                  color:'white', 
                  fontSize:'12px', 
                  width:'100%',
                  marginTop:'3px',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
               }} 
               size={'large'}>
               Google Sign In
            </Button>
         </div>
      </div>
   )
}

export default Unathenticated