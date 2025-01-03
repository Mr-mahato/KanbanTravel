import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { DataContextProvider } from "./Context/DataContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DataContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DataContextProvider>
);
