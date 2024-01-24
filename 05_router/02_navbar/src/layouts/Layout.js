import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


const Layout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
        </>
    )
}

export default Layout;