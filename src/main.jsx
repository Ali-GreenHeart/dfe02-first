import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import App from './App'
import AuthContextProvider from './context/AuthContext'
import BasketContextProvider from './context/BasketContext'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer)


const rootElem = ReactDOM.createRoot(document.getElementById('root'))

rootElem.render(
  <Provider store={store}>
    <BasketContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BasketContextProvider>
  </Provider>
)
