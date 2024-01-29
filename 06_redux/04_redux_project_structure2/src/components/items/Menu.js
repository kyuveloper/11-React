import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

const Menu = ({id}) => {
    const result = useSelector(state => state.menuReducer);
    const menu = result.menu;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callGetMenuAPI(id));
    },[])

    return (
        menu && (
            <>
                <h3>Menu Name : {menu.menuName}</h3>
                <h3>Menu Price : {menu.menuPrice}</h3>
                <h3>Menu Category : {menu.categoryname}</h3>
                <h3>Menu Detail : {menu.detail.description}</h3>
                <img src={menu.detail.image} style={{maxWidth: 500}} alt={menu.menuName}/>
            </>
        )
    )
}
export default Menu;