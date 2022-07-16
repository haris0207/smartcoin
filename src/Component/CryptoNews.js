import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';





const CryptoNews = () => {

const [cryptoNews, setCryptoNews] = useState()

  // const options = {
  //   method: 'GET',
  //   url: 'https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=off&textFormat=Raw&freshness=Day&count=7',
  //   params: {safeSearch: 'Off', textFormat: 'Raw'},
  //   headers: {
  //     'X-BingApis-SDK': 'true',
  //     'X-RapidAPI-Key': 'a9c89810edmsh33f3e1c5c90f82fp115e21jsn4e553b842d9f',
  //     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  //   }
  // };
  
  const fetchNews=async()=>{
              const {data} = await  axios.request('https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&safeSearch=off&textFormat=Raw&freshness=Day&count=7',{
                headers: {
                  'X-BingApis-SDK': 'true',
                  'X-RapidAPI-Key': 'a9c89810edmsh33f3e1c5c90f82fp115e21jsn4e553b842d9f',
                  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
                }
              });
              setCryptoNews(data);
              
  }

  useEffect(() => {
    fetchNews();
  },[] )
  console.log(cryptoNews);
  return (
   <div style={{marginTop:20}}>
   <Typography variant='h5' style={{ flexGrow: 1,
 textAlign: "center"}}>
    Latest Crypto News
   </Typography>
    <Grid container rowGap={4} style={{marginTop:50,marginLeft:50,}} >
      

    {!cryptoNews?<h4>loading</h4>:
       cryptoNews?.value.map((news)=>{
        return(
         
          <Grid item lg={4} >
        <Card sx={{ maxWidth: 345,minWidth:300 }}>
          
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={news?.image?.thumbnail?.contentUrl}
          alt="Crypto News"
        />
        <a href={news.url}target="_blank" rel='noreferrer'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="Grid">
            {news.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {news.description>100?`${news.description.substring(0,100)}...`
           :news.description
           }
          </Typography>
        </CardContent>
        </a>
      </CardActionArea>
    
    </Card>
    </Grid>
  
        )
       })
    }
    
    </Grid>
    </div>
  )
}

export default CryptoNews