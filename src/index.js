import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './context/ContextProvider'
const root = createRoot(document.getElementById('root'));

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);