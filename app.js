// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello World from React "); //core react things

{
  /* <div id="parent">
        <div id="child">
            <h1 id="heading">Hello by react</h1>
            <h2 id="heading2"> Hello i am the children of child </h2>
        </div>
    </div> */
}

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
