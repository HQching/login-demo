import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {//unique for each project
  baseUrl: 'https://app-zgbxpixf81cp.frontegg.com',
  clientId: '497cf51e-1471-4dcd-9527-028d548c19ea'
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>>
    <App />
  </FronteggProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
