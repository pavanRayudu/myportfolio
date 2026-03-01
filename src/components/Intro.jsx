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
          <p className='introduction'>
            I am an IT professional with 4 years of industry 
            experience, specializing in the SAP SD module and
             contributing to multiple SAP implementation and support projects. I am also a passionate UI developer, striving to build user-friendly and intuitive web applications.
          </p>
        </div>
        <div className="links">
          <ul>

            <Link to='/skills' className='nav-link'>Core Expertise</Link>
            <Link to='/experience' className='nav-link'>Professional Experience</Link>

            <Link to='education' className='nav-link'>Education</Link>

            

            <Link to='interests' className='nav-link'>Interests</Link>

            <Link to='contact' className='nav-link link-5'>Connect with me</Link>

          </ul>
        </div >

      </section >




    </div >
  )
}

export default Intro
