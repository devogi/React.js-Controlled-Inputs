import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return <>
  <article>
    <form onSubmit={handleSubmit} ></form>
  </article>
  </>
}

export default App;
