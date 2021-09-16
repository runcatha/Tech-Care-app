import './Nav.css'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar'

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-up">Sign Up</NavLink>
      <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
  )
  const alwaysOptions = (
    <>
      <NavLink className="link" to="/laptops">Laptops</NavLink>
    </>
  )

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src='https://i.imgur.com/qYcMJPz.png?1'
            alt='home'
            id='home-link' />
        </NavLink>
        <div className='nav-block'>
          <div className="links">
            {user && <div className="link welcome">Welcome, {user.username}</div>}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
      <Sidebar user={user} pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </nav >
  )
}
export default Nav