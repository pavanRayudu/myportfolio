import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';

const Skills = ({ visible, setVisible }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='skills'>
      <motion.button

        id='home-link' onClick={() => navigate('/')}>
        <IoHomeSharp /><p>Home</p>
      </motion.button>

      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{
          scale: 1, transition: {
            duration: 0.3,
            ease: easeOut
          }
        }}
      >Core Expertise</motion.h1>
      {/* <hr className='divider'/> */}
      <div className='skill-section'>
        <div className='technical technical-sap'>
          <motion.h2
            initial={{ x: 500 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.3,
                ease: easeOut
              }
            }}


          >SAP SD on S/4 HANA</motion.h2>
          <ul className='skill_pills'>
            <li>SD Configurations</li>
            <li>IDocs</li>
            <li>O2C</li>
            <li>Pricing</li>
            <li>UAT Support</li>
            <li>Functional Specifications</li>
            <li>RICEFW Objects</li>
            <li>Functional Testing</li>
          </ul>
          <motion.ul
            className='skills-list'
            initial={{ x: 500 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.4,
                ease: easeInOut
              }
            }}>
            <li>Comprehensive Hands-on experience in both SAP ECC and S/4 environments</li>
            <li>Expertise in SAP S/4HANA Implementation & Rollout</li>
            <li>Order-to-Cash (OTC) Process</li>
            <li>In-depth proficiency in Pricing, output, text, partner determinations </li>

            <li>Implementation of SD Business Processes and Configurations</li>
            <li>IDoc Monitoring and Error Handling</li>
            <li>Implementing Special Business scenarios in SD</li>
            <li>Expertise in drafting detailed Functional Specification (FS) preparation for developments and enhancements </li>
            <li>Creating testcases for business scenarios</li>
            <li>Functional testing and UAT Support</li>
            <li>Master data management</li>
            <li>Output Management</li>
            <li>Unit Testing, Integration Testing, and UAT Support</li>
            <li>Integration of SD with MM and FI in S/4HANA</li>
            <li>Cut over activities and Go-Live support</li>
          </motion.ul>
        </div>
        <div className='technical technical-ui'>
          <motion.h2
            initial={{ x: 500 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.5,
                ease: easeOut
              }
            }}


          >UI Development</motion.h2>
          <ul className='skill_pills'>
            <li>UI</li>
            <li>Figma Essencials</li>
            <li>HTML5</li>
            <li>CSS / SCSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git</li>
          </ul>
          <motion.ul
            className='skills-list'
            initial={{ x: 500 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.6,
                ease: easeOut
              }
            }}>
            <li>Mobile friendly UI design using Figma</li>
            <li>Expertise in HTML5, CSS, JavaScript</li>
            <li>SPA using React</li>
            <li>MongoDB, Firebase, MySQL databases </li>
            <li>GitHUB</li>
            <li>Responsive website development</li>
            <li>Knowledge on Backend framework ExpressJS</li>
            <li>Bootstrap, Tailwind css</li>
          </motion.ul>
        </div>
        <ul></ul>

      </div>
    </motion.div >
  )
}

export default Skills
