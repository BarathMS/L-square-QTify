import React from "react";
import styles from "./navbar.module.css"
import Logo from "../Logo/logo";
import Search from "../search/Search";
import Button from "../Button/Button"


const Navbar =()=>{
    return(
        <>
        <nav className={styles.navBar}>
        <Logo/>
        <Search search={"Search a song of your choice"}/>
        <Button children="GIVE FEEDBACK"/>
    </nav>
        </>
    );
}

export default Navbar;