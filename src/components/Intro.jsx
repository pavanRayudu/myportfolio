import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Skills from './Skills'

const IMAGES = {
  image1: new URL('../assets/images/author2.JPG', import.meta.url).href
}

const Intro = ({ setVisible }) => {
  const [data, setData] = useState({})

  const showView = (view) => {
    sendDataToApp(data)
  }

  return (
    <div className='intro'
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="element"></div>
      <div className="element-2"></div>
      <section>
        <div className="content">
          <h1>Hello, I'm <span>Pavan</span></h1>
          <p className='poppins-regular-italic'>SAP SD Functional Consultant</p>
          <p className="address">Based in Hyderabad, Telangana- India</p>
          <p className='introduction'>Skilled and experiend SAP
            Professional having 2.5+ years of experience in IT.
            Expertise lies in Sales and Disribution module and UI developement for web apps.</p>
        </div>
        <div className="links">
          <ul>

            <Link to='/skills' className='nav-link'>Skills</Link>

            <Link to='education' className='nav-link'>Education</Link>

            <Link to='/experience' className='nav-link'>Experience</Link>

            <Link to='interests' className='nav-link'>Interests</Link>

            <Link to='contact' className='nav-link link-5'>Connect with me</Link>

          </ul>
        </div >

      </section >




    </div >
  )
}

export default Intro
