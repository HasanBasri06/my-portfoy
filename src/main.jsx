import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import PHP85 from './blogs/php/PHP85'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route index element={<App />} />
        {/* <Route path='blogs' element={<>Hi</>} /> */}
        <Route path='/blogs/php-8-5-de-gelen-ozellikler' element={<PHP85 />} />
    </Routes>
  </BrowserRouter>
)
