// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './App.css';
import Navbar from './component/navbar';
import Main from './component/container';
import { getMatchData } from './services/getMatch';
import MatchList from './pages/matchday/matchday';

function App() {
  const [match, setMatches] = useState([])

  useEffect(() => {

    const fetchMatch = async () =>{
      const data = await getMatchData({
          searchQuery: 'PL'
      })
      setMatches(data.matches)
      console.log(data);
      return
    }
    fetchMatch()

  }, [])

  return (
    <>
      <Navbar/>
      <Main>
        {<MatchList matches={match}/>}
      </Main>
    </>
  );
}

export default App;
