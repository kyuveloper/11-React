import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getBlogList } from "../api/BlogApi";
import BlogItem from "../components/BlogItem";
import boxStyle from "./Blog.module.css"


const Blog = () => {
    const [blogList, setBlogList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setBlogList(getBlogList())
    },[])

    const onClickHandler = () => {
        navigate(`/blog/search?blogName=${searchValue}`)
    }

    return (
        <>
            <h1>Blog World</h1>
            <div>
                <input type="search" name="blogName" onChange={e=>{setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>Search</button>
            </div>
            <div className={boxStyle.BlogBox}>
                {blogList.map(blog => <BlogItem key={blog.blogCode} blog={blog}/>)}
            </div>
        </>
    )
}

export default Blog