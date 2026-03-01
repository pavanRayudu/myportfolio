import React from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { FaInstagram, FaGithub, FaSnapchat, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className='contact'>
      <button
        id='home-link' onClick={() => navigate('/')}>
        <IoHomeSharp /><p>Home</p>
      </button>
      {/* <h1>Contact Me</h1> */}
      <div className="contact_details">
        <div className="social_links">
          <p>Connect with me on</p>
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
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSnapchat />
            </a>

          </div>


        </div>
        <div className="contact_form">
          <section class="contact-section" id="contact">
            <form action="" id="contactForm">
              <div class="form-field">
                <label for="name">Name:</label>
                <input required type="text" class="form-field_input" id="name" />
              </div>
              <div class="form-field">
                <label for="email">Email:</label>
                <input required type="email" class="form-field_input" id="email" />
              </div>
              <div class="form-field">
                <label for="message">Message:</label>
                <textarea placeholder="Have a suggestion? Let me know..." required name="message"
                  id="message"></textarea>
              </div>
              <button type="submit">Submit</button>

            </form>
          </section>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
