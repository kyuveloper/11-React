import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import BlogSearchResult from './pages/BlogSearchResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='main' element={<Main/>}/>
          <Route path="blog">
            <Route index element={<Blog/>}/>
            <Route path=':blogCode' element={<BlogDetail/>}/>
            <Route path='search' element={<BlogSearchResult/>}/>
          </Route>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
