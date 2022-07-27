import React, { useState } from "react";
import OutPut from "./OutPut";

function Greeting() {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <OutPut>It's Good To See You!</OutPut>}
      {changedText && <OutPut>Changed</OutPut>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
