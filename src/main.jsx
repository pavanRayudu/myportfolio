import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Blogs from './components/Blogs.jsx'


createRoot(document.getElementById('root')).render(
  <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
  </div>
)