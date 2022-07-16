import React, { useState } from 'react'
import {AppBar, Box, Button, ButtonGroup, MenuItem, Select, Tab, Tabs, Toolbar, Typography, } from '@mui/material'
import { Container, minWidth, textTransform } from '@mui/system'
import { Link, useNavigate, } from 'react-router-dom'
import { TabPanelUnstyled } from '@mui/base'
import { CryptoState } from '../ContextApi'
import Home from './Home'
import Blog from './Blog'

const Navigate= useNavigate;

const handleChange=()=>{

}
const typo= {
  marginRight:120,
  fontFamily:'Montserrat',
  fontWeight: 'bold',
  cursor:'pointer',
  minWidth:99
}
const menu= {
  fontFamily:'Montserrat',
  fontWeight: 'bold',
  color:'rgb(23,24,27)'
 
}
const button= {
  fontWeight: 600,
  marginRight:5,
  textTransform:'none',
  color:'rgb(23,24,27)'
}
const button1= {
  fontWeight: 600,
  marginRight:70,
  textTransform:'none',
  // color:'rgb(23,24,27)'
}
export default function Header() {
  let Navigate=useNavigate();

  const [selectedTab, setSelectedTab] = useState(0);
  const tabChange=(event, newValue)=>{
    setSelectedTab(newValue);
  }
  const {currency, setCurrency}= CryptoState();
  

  return (
    <>
  <AppBar color='transparent' position='static'>
    <Container>
      <Toolbar>
        <Typography onClick={()=>Navigate('/')
        } style={typo}>Crypto App</Typography>
    
<Tabs  
 value={selectedTab}
 onChange={tabChange}
style={{marginRight:300}} >
  <Tab 
  onClick={()=>Navigate('/')
}
  style={menu} label='Home'/>
  <Tab
  onClick={()=>Navigate('/blog')
}
  style={menu} label='blog'/>
</Tabs>
<Button style={button} variant='text'>Log In</Button>
<Button style={button1} variant='contained'>Sign Up</Button>


        <Select value={currency} onChange={(e)=>{
    setCurrency(e.target.value)}} variant='outlined' style={{height:40}}>
        <MenuItem  value='USD'>USD</MenuItem>
        <MenuItem value='INR'>INR</MenuItem>
        </Select>
      </Toolbar>
    </Container>

  </AppBar>
  {/* {selectedTab===0&& <Home/>}
  {selectedTab===1&& <Blog/>} */}
  </>
  )
}
