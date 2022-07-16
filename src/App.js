import React from 'react';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Blog from './Component/Blog';
import CoinPage from './Component/CoinPage';
import TopCoins from './Component/TopCoins';


function App() {
  return (<BrowserRouter>
   <Header/>
 
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/coins/:id" element={<CoinPage/>}/>
      <Route path='/trending'  element={<TopCoins/>}/>
    </Routes>

   </BrowserRouter>
  )
}

export default App;
