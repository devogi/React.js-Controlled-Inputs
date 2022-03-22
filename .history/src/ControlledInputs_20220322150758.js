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
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}></form>
       
        <div className="form-control" >

        </div>
        <button type="submit"> Add Person </button>
      </article>
    </>
  );
}

export default ControlledInputs;
