const { Outlet } = require("react-router-dom")

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