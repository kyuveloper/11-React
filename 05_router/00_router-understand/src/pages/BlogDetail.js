import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getBlogDetail } from "../api/BlogApi";


const BlogDetail = () => {

    const {blogCode} = useParams();
    const [blog, setBlog] = useState({
        blogName: '',
        blogCategory: '',
        blogDate: '',
        blogText: ''
    })

    useEffect(()=>{
        setBlog(getBlogDetail(blogCode));
        console.log(blog)
    })

    return (
        <>
            <h2>This Blog</h2>
            <h3>제목 : {blog.blogName}</h3>
            <h3>분류 : {blog.blogCategory}</h3>
            <h3>날짜 : {blog.blogDate}</h3>
            <h3>내용 : {blog.blogText}</h3>
        </>
    )
}

export default BlogDetail