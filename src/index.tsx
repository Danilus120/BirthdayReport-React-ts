import React from "react";
import ReactDOM from "react-dom/client";
import BirthdayReport from "./BirthdayReport";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BirthdayReport />
  </React.StrictMode>
);
