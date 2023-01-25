import React from "react";
import Poster from "../../assets/poster.png"
import styles from "./poster.module.css"

const Banner = () => {
    return(
        <img src={Poster} className={styles.img} alt="poster"/>
    )
};

export default Banner;