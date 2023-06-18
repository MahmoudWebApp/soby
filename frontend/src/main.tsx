import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import App from './App.tsx'
import './index.css'
import i18n from "./i18";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n} key={"lang_provider"}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
)


