import React, { useEffect, useState } from 'react'
import { getMatchData } from '../../services/premier-league/getMatch';
import { getStandingData } from '../../services/premier-league/getStandings';
import Main from "../../component/container"
import Banner from "../../component/poster"
import MatchList from "./matchday/matchday"
import StandingList from "./standings/standings"


const PremierLeague = () => {
    const [matches, setMatches] = useState([])
    const [standings, setStanding] = useState([])

  useEffect(() => {

    const fetchMatch = async () =>{
      const data = await getMatchData({
          id: 'PL'
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
          id: 'PL'
      })
      setStanding(data.standings)
      // console.log(data);
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
        <h1 className="div3">Premier League</h1>
      </Main>
    </>
  )
}

export default PremierLeague