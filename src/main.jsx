import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Hello } from './routes/Hello'
import { Hi } from './routes/Hi'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />} />
        <Route path="/hi" element={<Hi />} />
        <Route path="/hello" element={<Hello />} /> */}

        <Route path="/" element={<App />}>
          <Route path="/hello" element={<Hello />} />
          <Route path="/hi" element={<Hi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
