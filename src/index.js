import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TasksProvider } from "./Contexts/TasksContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TasksProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TasksProvider>
  </React.StrictMode>
);
