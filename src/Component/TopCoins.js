import { Box, Button, ButtonGroup, Container, InputAdornment, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CoinList, TrendingCoins } from '../config/Api'
import { CryptoState } from '../ContextApi'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { fontWeight } from '@mui/system'
import Carousel, { numberWithCommas } from './Carousel/Carousel'
import { useNavigate, useParams } from 'react-router-dom'
import HomeHeader from './HomeHeader'



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

const TopCoins = () => {
    const Navigate= useNavigate();
    // let {id}= useParams();
    const [page, setPage] = useState(1)
    const {currency, symbol}= CryptoState();
    const [selectedTab, setSelectedTab] = useState('Coins' )
 
    const tabChange=(event, newAlignment)=>{
       setSelectedTab(newAlignment);
    }
 
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
   
    const fetchCoins=async()=>{
        setLoading(true);
         const {data}= await axios.get(TrendingCoins(currency));
         setCoins(data);
   
         setLoading(false);
   
    }
    useEffect(() => {
       fetchCoins();
    
    }, [currency, coins?.id])
 console.log(coins)
   
 return(
    <>
    {/* <Carousel/>
      <HomeHeader/> */}
 
 <TableContainer component={Paper}>
 <Table>
 <TableHead>
    <TableRow >
       <TableCell>Coin</TableCell>
       <TableCell>Price</TableCell>
       <TableCell>24H Change</TableCell>
       <TableCell>Market Cap</TableCell>
       <TableCell>Last 7 Days</TableCell>
    </TableRow>
 </TableHead>
 <TableBody>
    {coins.slice((page-1)*10,(page-1)*10+10).map((row)=>{
       let profit= row.price_change_percentage_24h >=0;
 return (<>
    <TableRow
    key={row.name}
    onClick={()=>Navigate(`/Coins/${row.id}`)}
    style={{cursor:'pointer'}}
    >
 <TableCell
 component='th'
 scope='row'
 style={{
    display:'flex',
    gap:15
 }}
 
 >
 <img
 src={row?.image}
 alt={row.name}
 height='50'
 style={{marginBottom:10}}
 /><div style={{
    display:'flex',
    flexDirection:'column'
 }}>
 <span style={{
    fontSize:18,
    fontWeight:550
 }}>
 {row?.name}</span>
 <span style={{
    fontSize:14
 }}>
 {row?.symbol.toUpperCase()}</span></div>
 </TableCell>
 <TableCell
  style={{
     fontWeight:600
  }}>
     {symbol} {numberWithCommas(row?.current_price.toFixed(2))}
 
    </TableCell>
    <TableCell 
     style={{color: profit>0?'green':'red',
     fontWeight:'500'
     }}>
    {profit && "+"} {row?.price_change_percentage_24h?.toFixed(2)}%
    </TableCell>
    <TableCell>
       {symbol}
       {numberWithCommas(row?.market_cap.toString().slice(0,-6))}M
    </TableCell>
 </TableRow>
  
 
 
 </>
 )
 
    })}
 
 </TableBody>
 </Table>
 <Pagination 
 onChange={(_, value)=>{
    setPage(value)
    window.scroll(0,390)
 }}
 count={(coins?.length/10).toFixed(0)||0}
 
 />
    
 
 </TableContainer>
 </>
 )
}

export default TopCoins