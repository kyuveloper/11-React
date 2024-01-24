import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Main from "./page/Main";
import MyPage from "./page/MyPage";
import Layout from "./layouts/Layout";
import Error from "./page/Error";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='mypage' element={<MyPage/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
