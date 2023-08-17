import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./normalize.scss";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Router>
  </React.StrictMode>
);
