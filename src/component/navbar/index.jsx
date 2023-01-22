import React from 'react'
import styles from './navbar.module.css'
import { BrowserRouter, Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <h1>FOOTBALLISME</h1>
                <div className={styles.tab}>
                    <Link to="/pl">Premier League</Link>
                    <Link to="/laliga">La Liga</Link>
                    <Link to="/serie">Serie A</Link>
                    <Link to="/bundesliga">Bundeliga</Link>
                    <Link to="/ligue1">Ligue 1</Link>
                </div>
            </nav>
        <Outlet/>
        </>
    )
}

export default Navbar