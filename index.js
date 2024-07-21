import React from "react";
import ReactDOM from "react-dom/client";
// let ele=document.createElement("h1");
// ele.innerHTML="Hello World";
// let header=document.getElementById("root");
// //append child is used to insert any element 
// header.appendChild(ele);

{/* <div id="header">
    <div >
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div> */}
// const header=React.createElement("h1",
//     //it is an attribute
//     {id:"heading"},
//     "Hello from React");
// //create root where all the data will be displayed 
// const root=ReactDOM.createRoot(document.getElementById("root"));
//render our data
// root.render(header);

//React.createElement is nothing but an object
// console.log(typeof header);


let header=React.createElement("div",{id:"header"},
    React.createElement("div",{},
        [React.createElement("h1",{},"This is h1 tag"),
            React.createElement("h2",{},"This is h2 tag"),
        ]
    )
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(header);    




