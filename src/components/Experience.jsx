import React from 'react'

import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';
import { SiOnlyoffice } from "react-icons/si";
import { FaArrowLeft } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Experience = () => {
  const navigate = useNavigate();
  return (
    <motion.div className='experience'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <button
        id='home-link' onClick={() => navigate('/')}>
        <IoHomeSharp /><p>Home</p>
      </button>
      <h1><SiOnlyoffice size={36}/>Experience</h1>
      <div className="exp_details">
        <div className="exp exp_1">
          <h2 className="role">Associate Consultant</h2>
          <p className="company_name">Infosys Limited, Hyderabad</p>
          <p className="duration">Oct, 2025 - Present</p>
          <p className="project_type">Project type: SAP S/4 HANA Implementation</p>
          <ul className='skill_pills'>
            <li>SAP S/4 HANA</li>
            <li>SAP SD</li>
            <li>ABAP</li>
            <li>RICEFW</li>
            <li>FSDs</li>
            <li>UAT</li>
          </ul>
          <p className="rolesres_title">Roles and Responsibilities: </p>
          <ul className="degree_highlights rolesres_content">
            <li>Currently working as part of the
              Commercial TD team on an S/4HANA implementation
              project for
              leading pharmaceutical clients at Infosys.</li>
            <li>Gathered functional requirements from the core IT team from client side and translated them into detailed Functional Specification Documents (FSDs).</li>
            <li>Responsible for developing RICEFW objects as part of the project in line with business requirements and Performed functional testing for RICEFW objects.</li>
            <li>Coordinated with technical teams (ABAP and CPI) for the development of interfaces to third-party systems.</li>
            <li>Involved in integrated screening of business scenarios and supported business users during the integrated screening phase.</li>
            <li>Responsible for creating and maintaining test cases for Developed RICEFW using the ALM application. executed formal OQs in PROTON, and supported UAT activities.</li>
          </ul>
        </div>

        <div className="exp exp_2">
          <h2 className="role">Senior Systems Engineer</h2>
          <p className="company_name">Infosys Limited, Hyderabad</p>
          <p className="duration">Oct, 2024 - Sep, 2025</p>
          <p className="project_type">Project type: Roll Out Project</p>
          <ul className='skill_pills'>
            <li>SAP SCM</li>
            <li>Rollout</li>
            <li>Intrecompany Process</li>
            <li>FUT</li>
          </ul>
          <p className="rolesres_title">Roles and Responsibilities: </p>
          <ul className="degree_highlights rolesres_content">
            <li>Worked as part of the SCM team on a rollout project, responsible for integrated testing of intercompany business flows.</li>
            <li>Responsible for creating and maintaining test cases for intercompany business flows using the ALM application. executed formal OQs in PROTON, and supported UAT activities.</li>
            <li>Prepared end-to-end documentation of intercompany flows, including test scenarios and execution results</li>
            <li>Maintained standard and custom SAP configurations to set up and support intercompany business flows in line with business requirements.</li>
            <li>Collaborated with cross-functional teams to ensure smooth integration between SD, MM, and FI modules.</li>
            <li>Supported cutover activities to ensure a smooth and successful go-live.</li>
          </ul>
        </div>

        <div className="exp exp_3">
          <h2 className="role">Systems Engineer</h2>
          <p className="company_name">Infosys Limited, Hyderabad</p>
          <p className="duration">Jul, 2022 - Oct, 2024</p>
          <p className="project_type">Project type: Roll Out Project</p>
          <p className="rolesres_title">Roles and Responsibilities: </p>
          <ul className="degree_highlights rolesres_content">
            <li>Supported SAP SD rollout project for a leading pharmaceutical client.</li>
            <li>Performed testing of intercompany flows to ensure smooth cross-company transactions.</li>
            <li>Documented the test results and ensured the compliances for business process requirements</li>
          </ul>
        </div>

      </div>
    </motion.div>
  )
}

export default Experience
