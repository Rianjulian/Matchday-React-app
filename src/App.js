// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './component/navbar';
import LaLiga from './pages/laliga/laliga';
import PremierLeague from './pages/premier-league/pl';
import SerieA from './pages/serie/serie';
// import Main from './component/container';
// import { getMatchData } from './services/premier-league/getMatch';
// import { getStandingData } from './services/premier-league/getStandings';
// import MatchList from './pages/premier-league/matchday/matchday';
// import Banner from './component/poster';
// import StandingList from './pages/premier-league/standings/standings';

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
          <Route path='/bundesliga'/>
          <Route path='/ligue1'/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
