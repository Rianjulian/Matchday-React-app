// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { getMatchData } from '../../services/premier-league/getMatch';
import { getStandingData } from '../../services/premier-league/getStandings';
import Main from "../../component/container"
import Banner from "../../component/poster"
import MatchList from "./matchday/matchday"
import StandingList from "./standings/standings"


const PremierLeague = () => {
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
        <Main>
        {<StandingList standings={standing}/>}
        {<Banner/>}
        {<MatchList matches={match}/>}
        <div className="div3">World</div>
      </Main>
    </>
  )
}

export default PremierLeague