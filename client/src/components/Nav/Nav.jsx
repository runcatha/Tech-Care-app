import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <>
    <NavLink className="link" to="/add-laptop">Add Laptpop</NavLink>
    <NavLink className="link" to="/edit-laptop">Edit Laptop</NavLink>
    <NavLink className="link" to="/delete-laptop">Delete Laptop</NavLink>
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
    <NavLink className="link" to="/details">Details Page</NavLink>
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