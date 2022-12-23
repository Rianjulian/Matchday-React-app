// @ts-nocheck
import React from 'react';
import PropTypes, { number } from 'prop-types'
import styles from './matchday-list.module.css'
import MatchCard from '../../component/matchday'
import home from '../../assets/home.png'
import away from '../../assets/away.png'
import { useState } from 'react'
import classnames from 'classnames';

const MatchList = ({matches}) => {
    const [result,setResult] = useState(null)
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
                        className={classnames(styles.null,{
                            [styles.null]: result === ""
                        })}
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