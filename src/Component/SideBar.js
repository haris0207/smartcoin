import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'
import React from 'react'
import { CryptoState } from '../ContextApi'
import { numberWithCommas } from './Carousel/Carousel';

const SideBar = ({coin}) => {

  const {symbol, currency}= CryptoState();
  var curr= currency.toLowerCase();
  
  
  return (<>
    {!coin?<>loading</>:(
    <div>{coin?.symbol.toUpperCase()} Price Statistics<br/>
<TableContainer style={{marginTop:15}}>
<Table style={{minWidth:200}} aria-label="simple table">
  
<TableBody>
<TableRow >
<TableCell component="th" scope="row">
Market Cap Rank
</TableCell>
<TableCell align="right" style={{fontWeight:700, fontSize:16}}>
{coin?.market_cap_rank}
</TableCell>
</TableRow>
<TableRow  >
<TableCell component="th" scope="row">
Bitcoin Price	
</TableCell>
<TableCell align="right" style={{fontWeight:700, fontSize:16}}>
{symbol}{numberWithCommas(coin?.market_data.current_price[curr].toFixed(2))}
</TableCell>
</TableRow >
<TableRow  >
<TableCell component="th" scope="row">
Market Cap
</TableCell>
<TableCell>
ZB
</TableCell>
</TableRow>
<TableRow  >
<TableCell component="th" scope="row">
Trading Volume	
</TableCell>
<TableCell>
3B
</TableCell>
</TableRow>
<TableRow  >
<TableCell component="th" scope="row">
24h Low / 24h High	
</TableCell>
<TableCell>
4B
</TableCell>
</TableRow>
<TableRow  >
<TableCell component="th" scope="row">
7d Low / 7d High	
</TableCell>
<TableCell>
5B
</TableCell>
</TableRow>


</TableBody>


</Table>


</TableContainer>


    </div>)}</>
  )
}

export default SideBar