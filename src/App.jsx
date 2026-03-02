
// Importing the section of the page from components folder
import Intro from './components/Intro'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Interests from './components/Interests'
import Contact from './components/Blogs'
import { useState } from 'react';
import { motion } from "framer-motion"
// ................

function App() {
  return (
    <div className='App'>
      <Intro  />
      <div className='footer'>
        <p>© 2026 Pavan Rayudu | Crafted with love and 2 Red Bulls</p>
      </div>
    </div>
  )
}

export default App
