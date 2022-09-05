import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import { Hello } from './routes/Hello'
import { Hi } from './routes/Hi'
import { NotFound } from './routes/codeStatus/NotFound'
import { PeopleList } from './routes/PeopleList'
import { PeopleInfo } from './routes/PeopleInfo'
import { PeopleIndex } from './routes/PeopleIndex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<App />} />

        <Route path="hi" element={<Hi />} />
        <Route path="hello" element={<Hello />} />
        
        <Route path="peoples" element={<PeopleList />}>
          <Route index element={<PeopleIndex />} />
          <Route path=":peopleId" element={<PeopleInfo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
