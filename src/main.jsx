import React from 'react'
import ReactDOM from 'react-dom/client'
import  { App } from './app.jsx'
import './index.css'
import { DarkModeProvider } from './context/dark-mode-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <App />
    </DarkModeProvider>
  </React.StrictMode>,
)
