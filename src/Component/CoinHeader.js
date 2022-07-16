import React from 'react'
import { CryptoState } from '../ContextApi';
import { numberWithCommas } from './Carousel/Carousel';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const CoinHeader = ({coin}) => {
    const{currency, symbol}= CryptoState();
var curr= currency.toLowerCase();
let profit = coin?.market_data.price_change_percentage_24h >= 0;
console.log(coin)
  return (<>
 { !coin?<>loading</>:(<>
    <div style={{display:"flex",marginBottom:10,marginTop:10}}>
    <img
    src={coin?.image.large}
    alt={coin?.name}
    height="50"
    
    
    />
    <span style={{
      fontSize:22,
      marginTop:15,
      marginLeft:4,
      // fontFamily:"Montserrat",
      fontWeight:700           
    }}>{coin?.name} </span>
    <span style={{
      fontSize:22,
      marginLeft:4,
      marginTop:15,
      // fontFamily:"Montserrat",
      fontWeight:700           
    }}>({coin?.symbol.toUpperCase()} )</span>

      {profit>0?(<>
      <ArrowDropUpIcon fontSize="large" style={{ color: 'green', marginTop:15}}/>
       <span  style={{
        color: 'green',
        fontFamily:"Montserrat",
        fontSize:28, marginTop:14
        }}>
          {profit && "+"} { coin?.market_data.price_change_percentage_24h?.toFixed(2)}%</span></>
          ):(<>

          <ArrowDropDownIcon fontSize="large" style={{ color:'red', marginTop:15}}/> 
          <span  style={{
           color:'red',
           fontFamily:"Montserrat",
           fontSize:28, marginTop:14
         }}>
          {profit && "+"} { coin?.market_data.price_change_percentage_24h?.toFixed(2)}%</span>
          
          </> 
          )}
   
    
    </div>
    <span style={{marginLeft:10,fontWeight:700 ,fontSize:18,}}>
  {symbol}{numberWithCommas(coin?.market_data.current_price[curr].toFixed(2))}
    </span></>)
}
    </>
  )
}

export default CoinHeader