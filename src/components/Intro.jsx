import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import Skills from './Skills'

const IMAGES = {
  image1 : new URL('../assets/images/author2.JPG',import.meta.url).href
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

      <div className='image'>
        {/* <img className='author-image' src={IMAGES.image1} /> */}

        <div className="element"></div>
      </div>
      <div className="content">
        <h1>Hello, I'm <span>Pavan</span></h1>
        <p className='poppins-regular-italic'>SAP Functional Consultant, UI Developer</p>
        <p className="address">based in Hyderabad, Telangana- India</p>
        <p className='introduction'>Skilled and experiend SAP
          Professional having 2.5+ years of experience in IT.
          Expertise lies in Sales and Disribution module and UI developement for web apps.</p>
      </div>
      <div className="links">
        <ul>
          <li className="link link-1">
            <Link to='/skills' className='nav-link'>Skills</Link></li>
          <li className="link link-2">
            <Link to='education' className='nav-link'>Education</Link></li>
          <li className="link link-3">
            <Link to='/experience' className='nav-link'>Experience</Link></li>
          <li className="link link-4">
            <Link to='interests' className='nav-link'>Interests</Link>
          </li>
          <li className="link link-5">
            <Link to='contact' className='nav-link'>Contacts</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Intro
