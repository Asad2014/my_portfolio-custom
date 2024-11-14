import React, { useEffect } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../app/styles/skills.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });

    
    return () => {
      AOS.refresh();
    };
  }, []);

  const skillsData = [
    { name: 'HTML', level: '100%' },
    { name: 'CSS', level: '100%' },
    { name: 'JavaScript/TypeScript', level: '95%' },
    { name: 'Next.js', level: '75%' },
    { name: 'Tailwind CSS', level: '70%' },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
      
        <div className="skills-title">
          <h2>SKILLS</h2>
        </div>

    
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  <AiOutlineCheckSquare />
                </div>
                <h3>{skill.name}</h3>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-level"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <p className="skill-percentage">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
