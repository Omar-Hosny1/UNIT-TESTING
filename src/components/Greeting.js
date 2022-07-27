import React, { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <p>It's Good To See You!</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
