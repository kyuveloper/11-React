import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import About from "./pages/About";
import MenuSearchResult from "./pages/MenuSearchResult";
import MenuDetails from "./pages/MenuDetails";
import Menu from "./pages/Menu";


function App() {

  // npm i react-router-dom
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="menu">
            <Route index element={<Menu/>}/>
            <Route path=":menuCode" element={<MenuDetails/>}/> {/* :menuCode -> parhVariable(여기선 useParams의 값이 들어왔을때) */}
            <Route path="search" element={<MenuSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
