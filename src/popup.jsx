import React from "react";
import { render } from "react-dom";

function Popup() {
  return (
    <div>
      <h1>Hegwow</h1>
      <p>This is a sample popup</p>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
