import React from 'react'
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Navbar = () => {
    return(
        <nav>
            <h1>Footballisme</h1>
            <div className={styles.tab}>
                <a href="http://">Matchday</a>
                <a href="http://">Matchday Result</a>
                <a href="http://">Standings</a>
            </div>
        </nav>
    )
}

export default Navbar