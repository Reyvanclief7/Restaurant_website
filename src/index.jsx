import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/style.css";
import "./assets/css/bootstrap.min.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import "./config/firebase";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
