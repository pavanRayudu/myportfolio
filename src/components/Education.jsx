import React from 'react'

import { useNavigate } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa";

const Education = () => {

  const navigate = useNavigate();
  return (
    <div className='education'>
      <button
        id='home-link' onClick={() => navigate('/')}>
        <FaArrowLeft /><p>Home</p>
      </button>
      <h1>Education</h1>
      <div className="edu_details">
        <div className="edu edu_1">
          <p className="degree">Bachelor of Technology</p>
          <p className="institution_name">Rajiv Gandhi University of Knowledge Technologies, Nuzvid</p>
          <p className="duration">2018 - 2022</p>
          <ul className="degree_highlights">
            <li>Course name: Civil Engineering</li>
            <li>passed with distinction CGPA of 8.6</li>
            <li>Participated in various webinars and worshops related to civil field</li>
          </ul>
        </div>
        <div className="edu edu_2">
          <p className="degree">Pre University Course</p>
          <p className="institution_name">Rajiv Gandhi University of Knowledge Technologies, Nuzvid</p>
          <p className="duration">2016 - 2018</p>
          <ul className="degree_highlights">
            <li>Course name: MPC</li>
            <li>passed with CGPA of 8.0</li>
          </ul>
        </div>
        <div className="edu edu_2">
          <p className="degree">High School</p>
          <p className="institution_name">Jawahar Navodaya Vidyalaya, Yanam</p>
          <p className="duration">2011 - 2016</p>
          <ul className="degree_highlights">
            <li>Participated in Chess Compititions</li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Education
