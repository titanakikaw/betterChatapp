import React from 'react'
import { Layout, List, Avatar, Typography } from 'antd'

const { Item } = List
const { Text } = Typography

const ContentRoomComponent = () => {
   return (
      <Layout.Content style={{padding:'0 3rem', height: 'calc(100% - 150px)', overflowY:'scroll', paddingTop:'1rem'}}>
         <Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<Text style={{fontSize:'11px'}}>Test, data &emsp; <span style={{fontSize:'9px', fontStyle:'italic', color: 'grey'}}>Wed, 2022</span></Text>}
            description={<p style={{backgroundColor:'white', padding:'5px 10px', borderRadius:'10px'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for ba background applications, is refined by Ant UED Team"</p>}
         />
         <Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<Text style={{fontSize:'11px'}}>Test, data &emsp; <span style={{fontSize:'9px', fontStyle:'italic', color: 'grey'}}>Wed, 2022</span></Text>}
            description={<p style={{backgroundColor:'white', padding:'5px 10px', borderRadius:'10px'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for ba background applications, is refined by Ant UED Team"</p>}
         />
         <Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<Text style={{fontSize:'11px'}}>Test, data &emsp; <span style={{fontSize:'9px', fontStyle:'italic', color: 'grey'}}>Wed, 2022</span></Text>}
            description={<p style={{backgroundColor:'white', padding:'5px 10px', borderRadius:'10px'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for ba background applications, is refined by Ant UED Team"</p>}
         />
         <Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<Text style={{fontSize:'11px'}}>Test, data &emsp; <span style={{fontSize:'9px', fontStyle:'italic', color: 'grey'}}>Wed, 2022</span></Text>}
            description={<p style={{backgroundColor:'white', padding:'5px 10px', borderRadius:'10px'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for ba background applications, is refined by Ant UED Team"</p>}
         />
         <Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<Text style={{fontSize:'11px'}}>Test, data &emsp; <span style={{fontSize:'9px', fontStyle:'italic', color: 'grey'}}>Wed, 2022</span></Text>}
            description={<p style={{backgroundColor:'white', padding:'5px 10px', borderRadius:'10px'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for ba background applications, is refined by Ant UED Team"</p>}
         />
         <Item.Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title={<Text style={{fontSize:'11px'}}>Test, data &emsp; <span style={{fontSize:'9px', fontStyle:'italic', color: 'grey'}}>Wed, 2022</span></Text>}
            description={<p style={{backgroundColor:'white', padding:'5px 10px', borderRadius:'10px'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for baDesign, a design language for ba background applications, is refined by Ant UED Team"</p>}
         />
         <Item style={{textAlign:'right',  display:'flex', flexDirection:'row-reverse'}}>
            <p style={{backgroundColor:'#1e81b0', padding:'5px 10px', borderRadius:'10px', color:'white'}}>"Ant Design, a design language forDesign, a design language for baDesign, a design language for baDesign</p>
         </Item>
         
       
      </Layout.Content>
   )
}

export default ContentRoomComponent