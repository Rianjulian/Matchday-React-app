import React from 'react';
import PropTypes from 'prop-types'
import styles from './matchday.module.css'
import { formatDate } from '../../utils/formatDate';

const MatchCard = ({ imgHome, homeTeam, imgAway, awayTeam, date }) => {
    return (
        <>
            <div className={styles.matchCard}>
                <p>{formatDate(date)}</p>
                <div className={styles.match}>
                    <div className={styles.team}>
                        <img src={imgHome} alt={homeTeam} />
                        <h1>{homeTeam}</h1>
                    </div>
                    <p>V</p>
                    <div className={styles.team}>
                        <img src={imgAway} alt={awayTeam} />
                        <h1>{awayTeam}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

MatchCard.propTypes = {
    imgHome: PropTypes.string,
    homeTeam: PropTypes.string,
    imgAway: PropTypes.string,
    awayTeam: PropTypes.string,
    date: PropTypes.string,
}

export default MatchCard