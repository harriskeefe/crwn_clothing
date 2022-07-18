import React from "react";
// React library is responsible for the functionality of the application.
import { createRoot } from "react-dom/client";
// ReactDOM connects the application to the document object model.
// react-dom/client provides client specific methods to initialize apps for the client.
import { BrowserRouter } from "react-router-dom";
// Import BrowserRouter to connect our application to the browsers URL.
// The library react-router-dom allows dynamic routing in the program.
import "./index.scss";
// The stylesheet is imported into index.js
import App from "./App";
// The App component is imported into index.js
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
// The container encapsulates the root on the document object model.
const root = createRoot(container);
// createRoot is a react root that encapsulates the DOM root.
// The render method is used to render the UI.
// The App component which contains the entire application will be rendered.
// BrowserRouter encapsulates the App component and is rendered with it.
// StrictMode double renders application to ensure all standard are followed. Errors may occur due to deprecation.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
