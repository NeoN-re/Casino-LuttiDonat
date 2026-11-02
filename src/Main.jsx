import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- 1. ИМПОРТИРУЕМ HashRouter
import App from './App.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* <-- 2. ИСПОЛЬЗУЕМ ЕГО ЗДЕСЬ */}
      <App />
    </HashRouter>
  </React.StrictMode>
)
