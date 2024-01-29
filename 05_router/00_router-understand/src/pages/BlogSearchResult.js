import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { searchBlog } from "../api/BlogApi";
import BlogItem from "../components/BlogItem";


const BlogSearchResult = () => {

    const [search] = useSearchParams();
    const searchBlogName = search.get('blogName');
    const [blogList, setBlogList] = useState([]);

    useEffect(()=>{
        setBlogList(searchBlog(searchBlogName));
    },[])

    return (
        <>
            <h1>Search Result</h1>
            <div>
                {blogList.map(blog => <BlogItem key={blog.blogCode} blog={blog}/>)}
            </div>
        </>
    )
}

export default BlogSearchResult