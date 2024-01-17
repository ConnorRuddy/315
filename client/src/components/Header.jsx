import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Social from "./Social"


export default function Header(){
  return (
    <header>
      <Link className='site-logo' to='/'>315L</Link>
        <nav>
        <NavLink
          to='/'
          className={({isActive}) => isActive ? 'active-link' : null}>Home</NavLink>
          <NavLink
          to='/about'
          className={({isActive}) => isActive ? 'active-link' : null}>About</NavLink>
          <NavLink
          to='/career'
          className={({isActive}) => isActive ? 'active-link' : null}>Career</NavLink>
          </nav>
         
         <div className="social">
          <Social />

            </div>
      </header>
  )
}