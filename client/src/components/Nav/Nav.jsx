import './Nav.css'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import React from 'react';

const Nav = ({ user }) => {
  const [visible, setVisible] = useState(true)
  const [ham, setHam] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setVisible(true)
        setHam(true)
      } else if (window.innerWidth < 500 && !visible) {
        setVisible(false)
        setHam(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
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
    <header>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src='https://i.imgur.com/qYcMJPz.png?1'
            alt='home'
            id='home-link' />
        </NavLink>
        <div className='nav-block'>
          <img src='https://i.imgur.com/ph864XQ.png'
            alt='🍔'
            id='ham-icon'
            onClick={() => setHam(!ham)} />
          <div className="links"
            style={{ display: visible && ham ? 'flex' : 'none' }}>
            {user && <div className="link welcome">Welcome, {user.username}</div>}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
    </header>
  )
}
export default Nav