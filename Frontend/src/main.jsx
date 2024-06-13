import React from 'react'
import ReactDOM from 'react-dom/client'
import { initialize } from 'react-ga';
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

initialize('G-THT25FBCLL'); 