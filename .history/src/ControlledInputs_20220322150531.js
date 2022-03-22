import React, { useState } from "react";

function ControlledInputs() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      console.log(object)
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}></form>
        <div className="form-control">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <button type="submit"> Add Person </button>
      </article>
    </>
  );
}

export default ControlledInputs;
