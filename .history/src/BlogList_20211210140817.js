const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2> {title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={} ></div>
      ))}
    </div>
  );
};

export default BlogList;
{
  blogs, title;
}
