import { Link } from "react-router-dom"

const BlogItem = ({blog}) => {
    return (
        <Link to={`/blog/${blog.blogCode}`}>
            <div>
                <h3 className="title">이름 : {blog.blogName}</h3>
                <h3 className="category">분류 : {blog.blogCategory}</h3>
                <h3 className="date">날짜 : {blog.blogDate}</h3>
            </div>
        </Link>
    )
}

export default BlogItem