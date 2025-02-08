import React from "react";
import styles from "./navbar.module.css"
import Logo from "../Logo/logo";
import Search from "../SearchBar/SearchBar";
import Button from "../Button/Button"


const Navbar =()=>{
    return(
        <>
        <nav className={styles.navBar}>
        <Logo/>
        <Search search={"Search a song of your choice"}/>
        <Button children="Give Feedback"/>
    </nav>
        </>
    );
}

export default Navbar;