import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <h1>심심할 땐 이거 어때~?</h1>
            <NavLink to={'/search'}>놀러가자</NavLink>
        </>
    )
}

export default Navbar;