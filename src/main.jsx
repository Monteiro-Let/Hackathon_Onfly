import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "react-router-dom";
import { MainRoute } from "./routes/mainRoutes";


createRoot(document.getElementById("root")).render(
  <StrictMode> 
      <Router>
        <MainRoute />
      </Router>
  </StrictMode>
);
