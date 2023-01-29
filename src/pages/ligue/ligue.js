import React, { useEffect, useState } from 'react'
import { getMatchData } from '../../services/ligue/getMatch';
import { getStandingData } from '../../services/ligue/getStandings';
import Main from "../../component/container"
import Banner from "../../component/poster"
import MatchList from "./matchday/matchday"
import StandingList from "./standings/standings"


const Ligue = () => {
  const [matches, setMatches] = useState([])
  const [standings, setStanding] = useState([])

  useEffect(() => {

    const fetchMatch = async () =>{
      const data = await getMatchData({
          id: 'FL1'
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
          id: 'FL1'
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
        <h1 className="div3">Ligue 1</h1>
      </Main>
    </>
  )
}

export default Ligue