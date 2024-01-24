import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className='navbarContainer'>
            <ul>
                <li><NavLink to={'/main'}>HOME</NavLink></li>
                <li><NavLink to={'/blog'}>BLOG</NavLink></li>
                <li><NavLink to={'/contact'}>CONTACT ME</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;