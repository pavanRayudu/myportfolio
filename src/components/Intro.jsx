import React from 'react'

const IMAGES = {
  image1 : new URL('../assets/images/author2.JPG',import.meta.url).href
}

const Intro = () => {
  return (
    <div className='intro'>

      <div className='image'>
        <img className='author-image' src={IMAGES.image1} />
        
        <div className="element"></div>
      </div>
      <div className="content">
        <h1>Hello, I'm <span>Pavan</span></h1>
        <p className='poppins-regular-italic'>SAP Functional Consultant, based in Hyderabad, Telangana- India</p>

        <p className='introduction'>Skilled and experiend SAP
          Professional having 2.5+ years of experience in IT.
          Expertise lies in Sales and Disribution module and few areas of ABAP Programing. worked on implementation and rollout projects for one of the high value Pharma clients.</p>
      </div>
      <div className="links">
        <ul>
          <li className="link link-1">Skills</li>
          <li className="link link-2">Education</li>
          <li className="link link-3">Experience</li>
          <li className="link link-4">Interests</li>
          <li className="link link-5">Contacts</li>
        </ul>
      </div>

    </div>
  )
}

export default Intro
