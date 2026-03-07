import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaSnapchat, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';

const IMAGES = {
  image1: new URL('../assets/images/author2.JPG', import.meta.url).href
}

const Intro = ({ setVisible }) => {
  const [data, setData] = useState({})

  const showView = (view) => {
    sendDataToApp(data)
  }

  return (
    <motion.div className='intro'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="content">
        <h1>Hello, I'm <span>Pavan</span></h1>
        <p>
          SAP SD Functional Consultant | SAP S/4HANA Implementation | Order-to-Cash (O2C)</p>
        <p className="address"> Based in Hyderabad, Telangana- India</p>
        <div className='divider'>
          <hr />
          <p>ABOUT ME</p>
          <hr />
        </div>
        <p className='introduction'>
          I am an SAP SD Consultant with 3.7+ years of experience in SAP implementation and rollout projects. I specialize in Order-to-Cash (O2C) processes, Implementing Business scenarios, and system configuration in SAP S/4HANA. Along with SAP, I enjoy building web applications using React and exploring modern UI development.
        </p>
      </div>
      <div className="links">
        <ul>
          <Link to='/experience' className='nav-link' id='link-1'>View my Professional Experience</Link>
          <Link to='https://drive.google.com/file/d/17R5xkmIyw98MD2XyfRgYiPkwf5WH3KqJ/view?pli=1' className='nav-link' id='link-2'>Download Resume</Link>
          <Link to='/skills' className='nav-link link-1' id='link-3'>Core Expertise</Link>
          <Link to='education' className='nav-link' id='link-4'>Qualifications</Link>
          {/* <Link to='/blogs' className='nav-link ' id='link-5'>Blogs</Link> */}

        </ul>
      </div >


      <div className="social_links">
        <div className='divider'>
          <hr />
          <p>Let’s connect on</p>
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



    </motion.div >
  )
}

export default Intro
