import React from 'react';
import PropTypes from 'prop-types'
import styles from './error.module.css'
import MatchCard from '../matchday/index.jsx'
import home from '../../assets/ligue-home.png'
import away from '../../assets/ligue-away.png'

const DataMatch = ({ matches }) => {
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

DataMatch.propTypes = {
    matches: PropTypes.array
}

export default DataMatch