import React from 'react';
import PropTypes from 'prop-types'
import styles from './matchday-list.module.css'
import MatchCard from '../../component/matchday'
import home from '../../assets/home.png'
import away from '../../assets/away.png'

const MatchList = ({matches}) => {
    return(
        <div className={styles.matchWrapper}>
            {matches.map((match, index, arr)=>{
                return(
                    <MatchCard
                        key={index}
                        date={match.utcDate}
                        imgHome={home}
                        homeTeam={match.homeTeam.name}
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