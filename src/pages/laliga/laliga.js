import React, { useEffect, useState } from 'react'
import { getMatchData } from '../../services/laliga/getMatch';
import { getStandingData } from '../../services/laliga/getStandings';
import Main from "../../component/container"
import Banner from "../../component/poster"
import MatchList from "./matchday/matchday"
import StandingList from "./standings/standings"


const LaLiga = () => {
    const [matches, setMatches] = useState([])
  const [standings, setStanding] = useState([])

  useEffect(() => {

    const fetchMatch = async () =>{
      const data = await getMatchData({
          id: 'PD'
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
          id: 'PD'
      })
      setStanding(data.standings)
      console.log(data);
      return
    }
    fetchStanding()

  }, [])

  return (
    <>
        <Main>
        {<StandingList standings={standings}/>}
        {<Banner/>}
        {<MatchList matches={matches}/>}
        <h1 className="div3">La Liga</h1>
      </Main>
    </>
  )
}

export default LaLiga