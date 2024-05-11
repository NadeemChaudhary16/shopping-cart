import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./redux/store/store.js"
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Toaster } from "react-hot-toast"
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Provider store={store}>
    <App />
   <Toaster />
  </Provider>
  </BrowserRouter>
)
