import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index2.css'
import App from './App.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Interests from './components/Interests.jsx'
import Contact from './components/Contact.jsx'

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;

createRoot(document.getElementById('root')).render(
  <div className='main'>
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/interests' element={<Interests />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>


  </div>



)
