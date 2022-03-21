import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "lorem ipsum dolor sit amet...",
      author: "a",
      id: "1",
    },
    {
      title: "welcomte to party",
      body: "lorem ipsum dolor sit amet...",
      author: "b",
      id: "2",
    },
    {
      title: "web dev top tips",
      body: "lorem ipsum dolor sit amet...",
      author: "c",
      id: "3",
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All blogs!"  />
      <BlogList blogs={blogs.filter((blog)=>  )} title="All blogs!"  />
    </div>
  );
};
export default Home;
