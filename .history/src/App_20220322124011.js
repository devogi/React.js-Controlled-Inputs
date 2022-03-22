import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <article>
        <form onSubmit={handleSubmit}></form>
        <div>
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange()
          />
        </div>
      </article>
    </>
  );
}

export default App;
