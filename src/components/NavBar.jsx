import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navgation.module.css"
const NavBar = () => {
  return (
  <div className={styles.navCnt}>
      <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/"><img src="" alt="logo" /></Link>
      </div>
      <div className={styles.right}>
        <ul>
          <li>
            <Link to='weather'>weather update</Link>
          </li>
          <li>
            <Link to='timer'>timer</Link>
          </li>
          <li>
            <Link to='calculator'>calculator</Link>
          </li>
          <li>
            <Link to='login'>login</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default NavBar
