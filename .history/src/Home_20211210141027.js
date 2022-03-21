import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: ""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."",
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
      <BlogList blogs={blogs} />
    </div>
  );
};
export default Home;
