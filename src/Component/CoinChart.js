import { CircularProgress} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

import { HistoricalChart } from '../config/Api'
import { CryptoState } from '../ContextApi'
import { chartDays } from '../config/data';
import SelectedButton from './SelectedButton';
import { numberWithCommas } from './Carousel/Carousel';
Chart.register(...registerables);


function CoinChart({coin }) {
  
const [historicChart, setHistoricChart] = useState()
const [days, setDays] = useState(1)
const {currency,symbol}= CryptoState();

const [loading, setLoading] = useState(false);

const fetchHistoricData = async ()=>{
  setLoading(true);
  const {data}= await axios.get(HistoricalChart(coin.id, days, currency))
setHistoricChart(data.prices);
setLoading(false);


}


useEffect(() => {
  
fetchHistoricData();

},[currency,days,loading])


  return (
    <>
 <div style={{width:"100%"}}>
   
      {/* chart */}
{!historicChart?(
    <CircularProgress
    style={{color:'blue'}}
    size={220}
    thickness={1}
    />

):(<>

     <Line
        data={{
          labels:historicChart.map((coin)=>{
            let date= new Date(coin[0]); 
            let time =
                 date.getHours()>12
                 ?`${date.getHours()-12}:${date.getMinutes()}PM`
                 :`${date.getHours()}:${date.getMinutes()}AM`

             return days===1?time:date.toLocaleDateString()    
          }),
          datasets:[
            {
              data:historicChart.map((coin)=>coin[1]),
              label:`Price(Past${days} Days) in ${currency}`,
              borderColor:'rgb(0,122,205)',
            }
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false      
              }
            },
            y: {
              grid: {
                display: false      
              }
            }
          },
           elements:{
             point:{
                radius:1,
             },
           },

        }}
        
        />
        </>
)}
<div style={{
  display:'flex',
  marginTop:20,
  justifyContent:'space-around',
  width:"100%",
  marginBottom:50,
  
}}
    
>


{chartDays.map((day)=>{
  return(
  <SelectedButton 
  key={day.value}
  onClick={()=>{setDays(day.value)}}
  selected={day.value===days}
  >{day.label} </SelectedButton >
)})}
</div>


</div>

</>
  )
}

export default CoinChart