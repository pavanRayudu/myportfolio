import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaSnapchat, FaLinkedin } from "react-icons/fa";

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
      <div className="content">
        <h1>Hello,<br /> I'm <span>Pavan Rayudu</span></h1>
        <p className='poppins-regular-italic'>SAP SD Functional Consultant</p>
        <p className="address"> Based in Hyderabad, Telangana- India</p>
        <div className='divider'>
          <hr />
          <p>ABOUT ME</p>
          <hr />
        </div>
        <p className='introduction'>
          I am an IT professional with 4 years of industry
          experience, specializing in the SAP SD module and
          contributing to SAP implementation and support projects. I am also a passionate UI developer, striving to build user-friendly and intuitive web applications.
        </p>
      </div>
      <div className="links">
        <ul>
          <Link to='/skills' className='nav-link'>Core Expertise</Link>
          <Link to='education' className='nav-link '>Qualifications</Link>
          <Link to='/experience' className='nav-link link-4'>Professional Experience</Link>
          <Link to='contact' className='nav-link link-5'>Connect with me</Link>
        </ul>
      </div >


      <div className="social_links">
        <div className='divider'>
          <hr />
          <p>CONNECT WITH ME ON</p>
          <hr />
        </div>
        <div className='social_links_objects'>
          <a
            href="https://www.instagram.com/pavanrayudu_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/pavanRayudu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rpvvamsi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>


      </div>



    </div >
  )
}

export default Intro
