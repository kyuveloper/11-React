import blogs from '../data/blog.json'

const getBlogList = () => {
    return blogs;
}

const getBlogDetail = (blogCode) => {
    return blogs.filter(blog => blog.blogCode === parseInt(blogCode))[0];
}

const searchBlog = (blogCode) => {
    
}