import "./Navlink.css";
import React from 'react'

function NavLink({LinkName}) {
  return (
    <li className="navlink">
      {LinkName}
    </li>
  )
}

export default NavLink