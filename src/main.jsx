import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import App from './App'
import AuthContextProvider from './context/AuthContext'
import BasketContextProvider from './context/BasketContext'

const rootElem = ReactDOM.createRoot(document.getElementById('root'))

rootElem.render(
  <BasketContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BasketContextProvider>
)
