import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Layouts from "./components/Layouts.jsx";
import HomePage from "./components/HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
