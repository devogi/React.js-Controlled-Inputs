import React from "react";
import { useState } from "react";

function ShowHide() {
  const [text, setText] = useState(false);

  return (
    <>
      <button onClick={() => setText(!text)}>show or hide</button>

      {text && <Ab />}
    </>
  );
}

const Ab = () => {
  return (
    <>
      <div style={{ marginTop: "2rem" , type: "italic" }}>
        <h1>i am comp</h1>
      </div>
    </>
  );
};

export default ShowHide;
