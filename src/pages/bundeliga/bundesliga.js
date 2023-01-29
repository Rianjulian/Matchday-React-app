import React, { useEffect, useState } from 'react'
import { getMatchData } from '../../services/bundesliga/getMatch';
import { getStandingData } from '../../services/bundesliga/getStandings';
import Main from "../../component/container"
import Banner from "../../component/poster"
import MatchList from "./matchday/matchday"
import StandingList from "./standings/standings"


const Bundesliga = () => {
  const [matches, setMatches] = useState([])
  const [standings, setStanding] = useState([])

  useEffect(() => {

    const fetchMatch = async () =>{
      const data = await getMatchData({
          id: 'BL1'
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
          id: 'BL1'
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
        <h1 className="div3">Bundesliga</h1>
      </Main>
    </>
  )
}

export default Bundesliga