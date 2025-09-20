// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/variables.css";
import "./styles/global.css"

const saved = localStorage.getItem("theme") || "light";
document.body.dataset.theme = saved;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <App />

);