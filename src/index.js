import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client' instead of 'react-dom'
import App from "./components/App";
import "./styles/styles.css";

// Create the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component
root.render(<App />);

