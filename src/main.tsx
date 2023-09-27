import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AppFormDataContextProvider from "./context/AppFormDataContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppFormDataContextProvider>
      <App />
    </AppFormDataContextProvider>
  </React.StrictMode>,
);
