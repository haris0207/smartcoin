import axios from 'axios';

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from '../config/Api';
import { CryptoState } from '../ContextApi';
import CoinChart from './CoinChart';
import Header from './Header';
import SideBar from './SideBar';

import CoinHeader from './CoinHeader';
const CoinPage = () => {

const { id }= useParams();
const [coin, setCoin] = useState();
const [loading, setLoading] = useState(false);

const{currency, symbol}= CryptoState();

const container={
display:'flex',
marginTop:20

}


const fetchCoin = async()=>{
  setLoading(true);
  const {data}=await axios.get(SingleCoin(id));  
  
 setCoin(data);
 setLoading(false);


};


useEffect(() => {

  fetchCoin();

},[])


  return  (
    <>
    <CoinHeader coin={coin}/>
<div style={container}>
<div style={{ width:"60%",display:"flex",flexDirection:"column"}}>
{loading?<h4>loading</h4>:
(<>

<CoinChart coin={coin}/>
</>)
}
</div>
<div style={{width:"35%",display:"flex",flexDirection:"column",
alignItems:"center",
marginTop:25,
borderLeft:"2px solid"
}}>
  {loading?<h4>loading</h4>:
  <SideBar coin={coin}/>
}
</div>

</div>
</>

  )
}

export default CoinPage