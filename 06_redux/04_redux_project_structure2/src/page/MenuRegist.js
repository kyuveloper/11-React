import { Navigate } from "react-router-dom";
import MenuRegistForm from "../components/form/MenuRegistForm";


const MenuRegist = () => {
    const loginStatus = !!localStorage.getItem('isLogin');
    if(!loginStatus) {
        return <Navigate to='/login' replace={true}/>
    }

    return (
        <>
            <h1>Menu Regist Page</h1>
            <MenuRegistForm />
        </>
    )
}

export default MenuRegist;