import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

export const IS_IN_DEV_MODE = import.meta.env.DEV;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
