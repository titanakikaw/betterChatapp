import React from 'react'
import { SmileOutlined, PaperClipOutlined, SendOutlined } from '@ant-design/icons';
import { Layout, Input } from 'antd';

const InputRoomComponent = () => {
   return (
      <Layout.Footer style={{paddingBottom:'0'}}>
         <Input.TextArea placeholder="Autosize height based on content lines" autoSize />
         <div style={{display:'flex', justifyContent:'space-between', marginTop:'5px'}}>
         <div>
            <SmileOutlined style={{fontSize:'25px', marginRight:'5px'}}/>
            <PaperClipOutlined style={{fontSize:'25px'}} />
         </div>
         <div>
            <SendOutlined style={{fontSize:'25px'}}/>
         </div>      
         </div>
      </Layout.Footer>
   )
}

export default InputRoomComponent