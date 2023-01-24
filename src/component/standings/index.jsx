import React from 'react';
import PropTypes, { number, string } from 'prop-types'
import styles from './standings.module.css'
import classnames from 'classnames';

const Standings = ({ position, teamImg, teamName, played, win, draw, lose, points }) => {
    return (
        <div className={styles.standing}>
            <table>
                <thead>
                    <tr>
                        <td>
                            <p>{position}.</p>
                        </td>
                        <td>
                            <img src={teamImg} alt={teamName} />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{played}</td>
                        <td>{win}</td>
                        <td>{draw}</td>
                        <td>{lose}</td>
                        <td>{points}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Standings.propTypes = {
    position: PropTypes.number,
    teamImg: PropTypes.string,
    teamName: PropTypes.string,
    played: PropTypes.number,
    win: PropTypes.number,
    draw: PropTypes.number,
    lose: PropTypes.number,
    points: PropTypes.number,
}

export default Standings