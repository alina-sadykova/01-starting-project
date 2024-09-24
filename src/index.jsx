import "./index.css";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom/client";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(React.createElement(App))
