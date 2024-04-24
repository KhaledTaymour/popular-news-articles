import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import FallbackImage from "src/components/Fallback/Fallback.tsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={FallbackImage}> */}
    <App />
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
