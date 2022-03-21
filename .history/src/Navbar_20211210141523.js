const Navbar = () => {
    return (
      <nav className="navbar">
        <h1> The blog </h1>
        <div className="links">
          <a href="/">Home</a>
          <a
            href="/create"
            stlye={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            New Blog
          </a>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  