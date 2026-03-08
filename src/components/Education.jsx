import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHomeSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='education'>
      <button
        id='home-link' onClick={() => navigate('/')}>
        <IoHomeSharp /><p>Home</p>
      </button>
      <h1> <FaGraduationCap size={38} />Education</h1>
      <div className="edu_details">
        <div className="edu edu_1">
          <h2 className="degree">
            Bachelor of Technology</h2>
          <p className="institution_name">Rajiv Gandhi University of Knowledge Technologies, Nuzvid</p>
          <p className="duration">2018 - 2022</p>
          <ul className="degree_highlights">
            <li>Major: Civil Engineering</li>
            <li>Academic Standing: Graduated with Distinction (8.6 CGPA)</li>
            <li>Attended in various technical webinars and workshops related to civil field</li>
          </ul>
        </div>
        <div className="edu edu_2">
          <h2 className="degree">Pre University Course</h2>
          <p className="institution_name">Rajiv Gandhi University of Knowledge Technologies, Nuzvid</p>
          <p className="duration">2016 - 2018</p>
          <ul className="degree_highlights">
            <li>Stream: MPC with IT</li>
            <li>Academic Standing: Secured 8.0 CGPA</li>
          </ul>
        </div>
        <div className="edu edu_2">
          <h2 className="degree">Class -X (CBSE Board)</h2>
          <p className="institution_name">Jawahar Navodaya Vidyalaya, Yanam</p>
          <p className="duration">2015 - 2016</p>
          <ul className="degree_highlights">
            <li>Completed in 2016 with CGPA of 10</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Education