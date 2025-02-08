import React from "react";
import styles from "./HeroSection.module.css"
import HeroImage from "../../assets/vibrating-headphone.png"
const HeroSection =()=>{
return(
    <div className={styles.HeroContainer}>
        <div className={styles.HeroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
        </div>
        <div><img className={styles.HeroImage} src={HeroImage} alt="HeadPhones"/></div>
    </div>
   )
}

export  default HeroSection;