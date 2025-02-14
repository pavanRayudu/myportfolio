import { useState } from 'react'
import './App.css'

// Importing the section of the page from components folder
import Intro from './components/Intro'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Interests from './components/Interests'
import Contact from './components/Contact'
// ................

function App() {
  return(
    <div className='App'>
      <Intro />
      {/* <Skills />
      <Experience />
      <Education/>
      <Interests />
      <Contact /> */}
    </div>
  ) 
}

export default App
