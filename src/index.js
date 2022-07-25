import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/user.context';

import "./index.scss";
import App from "./App";



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
/*
  The container encapsulates the root on the document object model.
  createRoot is a react root that encapsulates the DOM root.
  The render method is used to render the UI.
  The App component which contains the entire application will be rendered.
  BrowserRouter encapsulates the App component and is rendered with it.
  StrictMode double renders application to ensure all standard are followed. Errors may occur due to deprecation.
*/ 

/*
  React library is responsible for the functionality of the application.
  ReactDOM connects the application to the document object model.
  react-dom/client provides client specific methods to initialize apps for the client.
  Import BrowserRouter to connect our application to the browsers URL.
  The library react-router-dom allows dynamic routing in the program.
  The stylesheet is imported into index.js
  The App component is imported into index.js
*/


