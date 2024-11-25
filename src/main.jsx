import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // Use BrowserRouter aqui
import { MainRoute } from "./routes/mainRoutes";

createRoot(document.getElementById("root")).render(
  <StrictMode> 
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  </StrictMode>
);
