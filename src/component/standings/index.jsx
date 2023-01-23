import React from 'react';
import PropTypes, { number, string } from 'prop-types'
import styles from './standings.module.css'
import classnames from 'classnames';

const Standings = ({ position, teamImg, teamName, played, win, draw, lose, points }) => {
    return (
        <div className={styles.standing}>
            <table>
                <th>
                    <p>{position}.</p>
                    <img src={teamImg} alt={teamName} />
                </th>
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
    position: PropTypes.string,
    teamImg: PropTypes.string,
    teamName: PropTypes.string,
    played: PropTypes.number,
    win: PropTypes.number,
    draw: PropTypes.number,
    lose: PropTypes.number,
    points: PropTypes.number,
}

export default Standings