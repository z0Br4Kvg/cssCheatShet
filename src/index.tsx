import * as React from "react";
import * as ReactDOMClient from 'react-dom/client';
import {App} from "./app/app";
ReactDOMClient.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)