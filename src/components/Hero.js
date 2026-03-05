import React from 'react'
import profilePic from '../assets/profile.png';

const Hero = () => {
  return (
    <header className='hero' id='home'>
      <div className='hero-content'>
        <h1>
          Hi, I'm <span className='highlight'>Farmanullah Ansari</span> 👋
        </h1>
        <h3>Full-Stack Software Developer</h3>
        <p>
          I specialize in building dynamic, user-friendly, and scalable web
          applications. Passionate about the MERN stack, ASP.NET Core, and
          engineering seamless digital experiences.
        </p>
        <a href='#contact' className='btn-primary'>
          Contact Me
        </a>
      </div>

      <div className='hero-image'>
        <img src={profilePic} alt='Farmanullah Ansari' />
      </div>
    </header>
  )
}

export default Hero
