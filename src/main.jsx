import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import App from './App'
import AuthContextProvider from './context/AuthContext'

const rootElem = ReactDOM.createRoot(document.getElementById('root'))

rootElem.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
)
