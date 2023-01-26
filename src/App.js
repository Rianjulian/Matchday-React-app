import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/navbar';
import Bundesliga from './pages/bundeliga/bundesliga';
import LaLiga from './pages/laliga/laliga';
import Ligue from './pages/ligue/ligue';
import PremierLeague from './pages/premier-league/pl';
import SerieA from './pages/serie/serie';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<PremierLeague/>} />
          <Route path='/pl' element={<PremierLeague/>}/>
          <Route path='/laliga' element={<LaLiga/>}/>
          <Route path='/serie' element={<SerieA/>}/>
          <Route path='/bundesliga' element={<Bundesliga/>}/>
          <Route path='/ligue1' element={<Ligue/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
