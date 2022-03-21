import React, { useEffect, useState } from "react";

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  );

  return (
    <div>
      <h1>window</h1>
      <h2>size : {size}px </h2>
    </div>
  );
}

export default App;
