import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SSEProvider } from "./context/SSEProvider";
// or './hooks/SSEProvider' depending on where you placed the file

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <SSEProvider>
        <App />
      </SSEProvider>
    </StrictMode>
  </BrowserRouter>,
);
