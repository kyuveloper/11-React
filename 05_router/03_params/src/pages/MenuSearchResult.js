import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { searchMenu } from "../api/MenuApi";
import boxStyle from "./Menu.module.css";
import MenuItem from "../components/MenuItem";

const MenuSearchResult = () => {

    const [search] = useSearchParams(); /*  */
    const searchMenuName = search.get('menuName');
    const [menuList, setMenuList] = useState([]);
    /* 
        pathVariable -> http:/localhost:3000/menu/30 한개만 온다
        queryString Params -> http:/localhost:3000/menu?menuName='김치 튀김'&menuPrice=500 키,밸류를 가진 객체 형태로 넘어온다..
    */

    useEffect (()=>{
        setMenuList(searchMenu(searchMenuName));
    },[])

    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map( menu => <MenuItem key={menu.menuCode} menu={menu} />)}
            </div>
        </>
    )
}

export default MenuSearchResult;