
import { Box, Button, ButtonGroup, Container, InputAdornment, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'

import { CryptoState } from '../ContextApi'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fontWeight } from '@mui/system'

import { useNavigate, useParams, Link } from 'react-router-dom'

import TopCoins from './TopCoins'
import Carousel from './Carousel/Carousel';
import CoinsTable from './CoinsTable';


const headerMenu={
  backgroundColor:'rgb(241,243,244)',
  display:"flex",
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  height:60,
  marginBottom:20

}

const buttonStyle={
   backgroundColor:''
}


const HomeHeader = () => {
      const Navigate= useNavigate();
      // let {id}= useParams();
      const [page, setPage] = useState(1)
      const {currency, symbol}= CryptoState();
      const [selectedTab, setSelectedTab] = useState('Coin' )
      const tabChange=(event, newAlignment)=>{
            setSelectedTab(newAlignment);
         }
      
      useEffect(() => {
           setSelectedTab('coin')
      },[])
      
     return (<>
     <Carousel/>
      <Container style={{textAlign:"center"}}>
         <Typography 
         variant='h4'
         style={{margin:18, fontFamily:'Montserrat'}}
         >
   Cryptocurrency Prices By Market Cap
   
   
         </Typography>
   
   
      </Container>
          <div style={headerMenu}>
          <ToggleButtonGroup 
          
          size='small'
          color='primary'
          value={selectedTab}
          exclusive
          onChange={tabChange}
           >
            
          <ToggleButton
          value="coin"
          sx={{
             "&:hover":{backgroundColor:'rgb(245, 248, 255)'} }}
          
              style={{
                 marginRight:7,height:32, border:0,  fontWeight: 600,
          }}>All Coins</ToggleButton>
          
          
          <ToggleButton 
          value="trending"
          
           style={{marginRight:7,height:32, border:0 , fontWeight: 600,
           }}>Top Trending</ToggleButton>
          <ToggleButton 
          value="loser"
          
          style={{marginRight:7,height:32, border:0 , fontWeight: 600,
          }}>Top Losers</ToggleButton>
          
          
          
          </ToggleButtonGroup>
         
                  {/* <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                  <TextField 
                  size='small'
                 style={{width:'40%', marginLeft:430, }}
                  id="input-with-sx" 
                   variant="outlined"
                   InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}/>
              
          
          </div>
          {selectedTab==="coin"&&<CoinsTable/>}
          {selectedTab==="trending"&&<TopCoins/>}
          

          </>
     )
}

export default HomeHeader