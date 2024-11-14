
"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Pic from '../../public/pic.jpeg';
import '../app/styles/hero.css';

const Hero = () => {
  const typewriterOptions = {
    strings: ['Asad Iqbal', 'Front-End Developer'],
    autoStart: true,
    loop: true,
    delay: 75,
    deleteSpeed: 50,
    cursor: '|',
  };

  return (
    <section className='heroSection'>
      <div className='container'>
        <div className='textWrapper'>
          <h1>
            Hello, I am{' '}
            <span>
              <Typewriter options={typewriterOptions} />
            </span>
          </h1>
          <p>
          I’m a passionate web developer specializing in creating responsive, interactive websites that prioritize seamless user experiences. With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, I specialize in turning creative ideas into functional, visually engaging web applications.
          </p>
        </div>
        <div className='profilePicWrapper'>
          <Image
            className='profilePic'
            src={Pic}
            alt="Asad Iqbal's Profile Picture"
            width={320}
            height={320}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;