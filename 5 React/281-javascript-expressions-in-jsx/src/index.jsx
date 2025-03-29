import React from "react";
import ReactDOM from "react-dom";
const name = "Deepu chary";
const number = 3;

ReactDOM.render(
  <div>
    <h1>Hello, I'm {name}</h1>
    <p>MY fav number is {number}</p>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
