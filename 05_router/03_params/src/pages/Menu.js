import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getMenuList } from "../api/MenuApi";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css";


const Menu = () => {
    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    
    useEffect(
        () => {
            setMenuList(getMenuList());
        },[]
    );

    const onClickHandler = () => {

        navigate(`/menu/search?menuName=${searchValue}`)
    }
    
    return (
        <>
            <h1>Menu List</h1>
            <div>
                <input type="search" name="menuName" onChange={e => {setSearchValue(e.target.value)}} />
                <button onClick={onClickHandler}>Search</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map( menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    )
}

export default Menu;