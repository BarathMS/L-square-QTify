import React from "react";
import styles from "./logo.module.css";
import LogoImg from "../../assets/logo (1).png";

const Logo = () =>{
    return(
        <div className={styles.logoDiv}>
        <img src={LogoImg} alt="logo" width={67} />
        </div>
    )
};

export default Logo;