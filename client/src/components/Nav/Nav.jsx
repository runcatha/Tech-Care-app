import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <Link className="link" to="/add-laptop">Add Laptpop</Link>
    <Link className="link" to="/laptops/:id/edit">Edit Laptop</Link>
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
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/laptops">Listing</NavLink>
    <Link className="link" to="/laptops/:id">Details Page</Link>
  </>
)
const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Tech-Care App</NavLink>
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
export default Nav