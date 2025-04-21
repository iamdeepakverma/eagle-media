import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { hydrate, render } from "react-dom";


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
  <StrictMode>
    <App />
  </StrictMode>,
  </HelmetProvider>
)

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
