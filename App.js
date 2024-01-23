
// const heading = document.createElement("h2")
// heading.innerHTML="HI"
// const root = document.getElementById("root");
// root.appendChild(heading)

const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello ReactJS"),
        React.createElement("h2", {}, "Hello ReactJS")]),

    React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "Hello ReactJS"),
        React.createElement("h2", {}, "Hello ReactJS")])])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);



