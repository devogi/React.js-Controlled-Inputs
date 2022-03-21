const BlogList = () => {
    return (
      <div className="home">
        {BlogList.map((blog) => (
          <div className="blog-prewiev" key={blog.id}>
            <h2> {blog.author} </h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;
  