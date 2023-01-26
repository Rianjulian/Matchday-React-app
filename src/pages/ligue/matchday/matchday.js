// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types'
import styles from './matchday-list.module.css'
import MatchCard from '../../../component/matchday'
import home from '../../../assets/serie-home.png'
import away from '../../../assets/serie-away.png'

const MatchList = ({ matches }) => {
    return(
        <div className={styles.matchWrapper}>
            <h3>Match & Result</h3>
            {matches.map((match, index, arr)=>{
                return(
                    <MatchCard
                        key={index}
                        date={match.utcDate}
                        imgHome={home}
                        homeTeam={match.homeTeam.name}
                        scoreHome={match.score.fullTime.homeTeam}
                        scoreAway={match.score.fullTime.awayTeam}
                        imgAway={away}
                        awayTeam={match.awayTeam.name}
                    />
                )
            })}
        </div>
    )
}

MatchList.propTypes = {
    matches: PropTypes.array
}

export default MatchList