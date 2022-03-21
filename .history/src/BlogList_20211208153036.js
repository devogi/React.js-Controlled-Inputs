const BlogList = () => {
    return (
      <div className="home">
        {blogs.map((blog) => (
          <div className="blog-prewiev" key={blog.id}>
            <h2> {blog.author} </h2>
            <p>Written by {blog.author}</p>
          </div>
          <Blogs
        ))}
      </div>
    );
  };
  
  export default BlogList;
  