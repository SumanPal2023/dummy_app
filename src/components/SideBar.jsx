import React from 'react'
import { Link } from 'react-router-dom'
 import style from "./Aside.module.css"
const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
            <Link to="/users">Users</Link>
        </li>
        <li>
            <Link to="/addusers">Add users</Link>
        </li>
        <li>
            <Link to="/games">Games</Link>
        </li>
        <li>
            <Link to="/song">Songs</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
