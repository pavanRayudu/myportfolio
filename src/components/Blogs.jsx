import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaInstagram, FaGithub, FaSnapchat, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className='blogs'>
      <button
        id='home-link' onClick={() => navigate('/')}>
        <IoHomeSharp /><p>Home</p>
      </button>
      <h1>Blogs</h1>
      
    </div>
  )
}

export default Blogs
