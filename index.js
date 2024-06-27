let son = Math.floor(Math.random() * 1000);

let body = document.querySelector("body");
let h1 = document.createElement("h1");

h1.textContent = son;

body.appendChild(h1)

body.style = "background-color: blue; color: white"