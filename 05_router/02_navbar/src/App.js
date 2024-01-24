import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import MyPage from "./page/MyPage";
import Login from "./page/Login";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}> {/* 모든 요청을 레이아웃이 감싼 형태에서 아래를 조건부 실행 */}
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='mypage' element={<MyPage/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
