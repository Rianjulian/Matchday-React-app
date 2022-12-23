// @ts-nocheck
import React from 'react';
import PropTypes, { number, string } from 'prop-types'
import styles from './matchday.module.css'
import { formatDate } from '../../utils/formatDate';
import { useState } from 'react'
import classnames from 'classnames';

const MatchCard = ({ imgHome, homeTeam, scoreHome, scoreAway, imgAway, awayTeam, date }) => {
    const [result,setResult] = useState(null)
    return (
        <>
            <div className={styles.matchCard}>
                <div className={styles.team}>
                    <img src={imgHome} alt={homeTeam} />
                    <h1>{homeTeam}</h1>
                </div>
                <div className={styles.result}>
                    <h1 className={classnames(styles.score,{
                            [styles.null]: result === scoreHome
                        })}>{scoreHome}</h1>
                    <p>V</p>
                    <h1 className={classnames(styles.score,{
                            [styles.null]: result === scoreAway
                        })}>{scoreAway}</h1>
                </div>
                <div className={styles.team}>
                    <h1>{awayTeam}</h1>
                    <img src={imgAway} alt={awayTeam} />
                </div>
            </div>
        </>
    )
}

MatchCard.propTypes = {
    imgHome: PropTypes.string,
    homeTeam: PropTypes.string,
    scoreHome: PropTypes.number,
    scoreAway: PropTypes.number,
    imgAway: PropTypes.string,
    awayTeam: PropTypes.string,
    date: PropTypes.string,
}

export default MatchCard