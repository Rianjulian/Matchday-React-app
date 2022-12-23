import React from 'react'
import styles from './navbar.module.css'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const Navbar = () => {
    return(
        <nav>
            <h1>FOOTBALLISME</h1>
            <div className={styles.tab}>
                <a href="http://">Premier League</a>
                <a href="http://">La Liga</a>
                <a href="http://">Serie A</a>
                <a href="http://">Bundeliga</a>
                <a href="http://">Ligue 1</a>
            </div>
        </nav>
    )
}

export default Navbar