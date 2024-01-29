import { Link } from "react-router-dom"

const MenuItem = ({menu}) => {
    return (
        <Link to={`/menu/${menu.id}`}>
            <div className="menuItem">
                <h3>Name : {menu.menuName}</h3>
                <h3>Price : {menu.menuPrice}</h3>
                <h3>Category : {menu.categoryName}</h3>
            </div>
        </Link>
    )
}

export default MenuItem;