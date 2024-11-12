import React from "react";
import styles from "./logo.module.css";
import LogoImg from "../../Assets/logo.png";

const Logo = () =>{
    return(
        <div className={styles.logoDiv}>
        <img src={LogoImg} alt="logo" width={67} />
        </div>
    )
};

export default Logo;