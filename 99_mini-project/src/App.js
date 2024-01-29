import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Search from "./pages/Search";
import Test from "./pages/Test";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path='/search' element={<Search/>}/>
            <Route path='/test' element={<Test/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
