import { useNavigate } from "react-router-dom";

const Menus = () => {
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                Menu List {(loginStatus) && <button onClick={() => navigate('/menu/regist')}>Add Menu</button>}
            </h1>
            <MenuList/>
        </div>
    )
}

export default Menus;