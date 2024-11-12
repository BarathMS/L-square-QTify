import React from 'react'
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from "../../Assets/SearchIcon.svg"

const SearchBar = ({search}) => {
  return (
    
      <form className={styles.wrapper}  >
        <input className={styles.search} placeholder={search} />
            <button className={styles.searchButton} type='submit' >
              <SearchIcon/>
            </button>
      </form>
    
  )
}

export default SearchBar;