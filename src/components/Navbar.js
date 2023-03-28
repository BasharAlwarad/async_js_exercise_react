import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  let activeClassName = 'nav-active'

  return (
    <nav className='nav'>
      <NavLink
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
        to=''
      >
        Problem
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
        to='callbacks'
      >
        Callbacks
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
        to='asynchronous'
      >
        Asynchronous
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
        to='httpRequests'
      >
        HttpRequests
      </NavLink>
    </nav>
  )
}

export default Navbar
