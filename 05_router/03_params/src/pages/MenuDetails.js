import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMenuDetail } from "../api/MenuApi";


const MenuDetails = () => {

    const {menuCode} = useParams(); /* path variable로 받는걸 자동으로 받아온다 */
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: '',
        categoryName: '',
        detail: {}
    });

    useEffect(()=>{
        setMenu(getMenuDetail(menuCode));
        console.log(menu)
    },[])

    return (
        <>
            <h2>메뉴 상세 설명</h2>
            <h3>메뉴 이름 : {menu.menuName}</h3>
            <h3>메뉴 가격 : {menu.menuPrice}</h3>
            <h3>메뉴 종류 : {menu.categoryName}</h3>
            <h3>메뉴 설명 : {menu.detail.description}</h3>

            <img src={menu.detail.image} style={{maxWidth:500}}/>
        </>
    )
}

export default MenuDetails;