import React from "react"
import PropTypes from 'prop-types'
import styles from './standings.module.css'
import Standings from '../../../component/standings'

const StandingList = ({ standings }) => {
    return (
        <div className={styles.standingList}>
            <h3>Standings</h3>
            <div className={styles.headers}>
                <p>No</p>
                <div className={styles.table}>
                    <p>P</p>
                    <p>W</p>
                    <p>D</p>
                    <p>L</p>
                    <p>Pts</p>
                </div>
            </div>
            {standings.map((standing, index, arr) => {
                return standing.table.map((tabel, index, arr) => {
                    return (
                        <Standings
                            key={index}
                            teamImg={tabel.team.crestUrl}
                            played={tabel.playedGames}
                            win={tabel.won}
                            draw={tabel.draw}
                            lose={tabel.lost}
                            points={tabel.points}
                        />
                    )
                })
            })}
        </div>
    )
}

StandingList.propTypes = {
    standings: PropTypes.array,
    table: PropTypes.array
}

export default StandingList