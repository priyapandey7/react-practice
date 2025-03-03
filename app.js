import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },

    [
      React.createElement("h1", {}, "Hello Priya,i am h1 tag"),
      React.createElement("h2", {}, "Hello,i am h2 tag"),
    ]
  )
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
