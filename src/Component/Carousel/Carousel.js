import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { TrendingCoins } from '../../config/Api'
import { CryptoState } from '../../ContextApi'
import AliceCarousel from 'react-alice-carousel'
import {Link} from 'react-router-dom'
import { Container, fontWeight } from '@mui/system'

export function numberWithCommas(x){
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");

}
const carouselStyle={
      display:'grid',
      flexDirection:'column',
      alignItems:'center',
      cursor:'pointer',
      textTransformation:'uppercase',
      color:'white',
   
}

const Carousel = () => {
const [trending, setTrending] = useState([])

const {currency, symbol}= CryptoState();

const fetchTrendingCoins = async()=>{
const { data }= await axios.get(TrendingCoins(currency))

setTrending(data);
}


useEffect(() => {
    fetchTrendingCoins();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currency])

const items= trending.map((coin)=>{
 let profit= coin.price_change_percentage_24h >=0;

  return(
   <Container>
      <Link style={{
           display:'flex',
           flexDirection:'column',
           alignItems:'center',
           cursor:'pointer',
           color:'black',
           textTransform:'uppercase'

           }}
      to={`/coins/${coin.id}`}
      >
        <img 
           src={coin?.image}
           alt={coin.name}
           height='80'
           style={{marginBottom:10}}/>
         
        
           <span>
             {coin?.symbol}
             &nbsp;
             <span
             style={{color: profit>0?'green':'red',
            fontWeight:'500'
            }}
             >
             {profit && "+"} {coin?.price_change_percentage_24h?.toFixed(2)}%
             </span>
           </span>
           <span style={{fontSize:22, fontWeight:500}}>
             {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}

           </span>
           
      </Link>
      </Container>
  )


})

const responsive={
  0:{
    items:2,
  },
  512:{
    items:4
  },
};

  return (
     <div style={{marginTop:20}}>
 <AliceCarousel
 mouseTracking
 infinite
 autoPlayInterval={1000}
 animationDuration={1500}
 disableButtonsControls
 disableDotsControls
     responsive={responsive}
     autoPlay
     items={items} 
 />
    </div>
  )
}

export default Carousel