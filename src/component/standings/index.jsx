import React from 'react';
import PropTypes, { number, string } from 'prop-types'
import styles from './standings.module.css'
import classnames from 'classnames';

const Standings = ({ teamImg, teamName, played, win, draw, lose, points }) => {
    return (
        <div className={styles.standing}>
                <table>
                    <img src={teamImg} alt={teamName} />
                    <tr>
                        <td>{played}</td>
                        <td>{win}</td>
                        <td>{draw}</td>
                        <td>{lose}</td>
                        <td>{points}</td>
                    </tr>
                </table>
        </div>
    )
}

Standings.propTypes = {
    teamImg: PropTypes.string,
    teamName: PropTypes.string,
    played: PropTypes.number,
    win: PropTypes.number,
    draw: PropTypes.number,
    lose: PropTypes.number,
    points: PropTypes.number,
}

export default Standings