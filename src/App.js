// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar';
import Main from './component/container';
import { getMatchData } from './services/premier-league/getMatch';
import { getStandingData } from './services/premier-league/getStandings';
import MatchList from './pages/matchday/matchday';
import Banner from './component/poster';
import StandingList from './pages/standings/standings';

function App() {
  const [match, setMatches] = useState([])
  const [standing, setStanding] = useState([])

  useEffect(() => {

    const fetchMatch = async () =>{
      const data = await getMatchData({
          searchQuery: 'PL'
      })
      setMatches(data.matches)
      // console.log(data);
      return
    }
    fetchMatch()

  }, [])

  useEffect(() => {

    const fetchStanding = async () =>{
      const data = await getStandingData({
          searchQuery: 'PL'
      })
      setStanding(data.standings)
      console.log(data);
      return
    }
    fetchStanding()

  }, [])

  return (
    <>
      <Navbar/>
      <Main>
        {<StandingList standings={standing}/>}
        {<Banner/>}
        {<MatchList matches={match}/>}
        <div className="div3">World</div>
      </Main>
    </>
  );
}

export default App;
