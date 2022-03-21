import React, { useEffect, useState } from "react";

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, []);

  return
}

export default App;
