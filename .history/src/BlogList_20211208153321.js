const BlogList= (props) => {
    const blogs= props.blogs
}

const BlogList = () => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-prewiev" key={blog.id}>
          <h2> {blog.author} </h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
