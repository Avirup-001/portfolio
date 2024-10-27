import React from 'react'
import "./experience.css"
import { FaReact, FaDocker, FaCss3, FaNodeJs, FaPython, FaLinux } from 'react-icons/fa'
import { SiExpress, SiKubernetes, SiHelm, SiMongodb, SiTailwindcss, SiVite } from 'react-icons/si'
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri"
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoJavascript } from 'react-icons/io'
import { IoLogoSass } from "react-icons/io5";
import { GrMysql } from 'react-icons/gr'
import { BiLogoTypescript, BiLogoAngular } from "react-icons/bi";
import { motion } from 'framer-motion'


const Experience = () => {


  const frontEndSkills = [
    { icon: <RiNextjsFill className='exp__details-icon' />, name: 'NextJS', level: 'Experienced' },
    { icon: <FaReact className='exp__details-icon' />, name: 'React', level: 'Experienced' },
    { icon: <BiLogoAngular className='exp__details-icon' />, name: 'Angular', level: 'Experienced' },
    { icon: <BiLogoTypescript className='exp__details-icon' />, name: 'TypeScript', level: 'Experienced' },
    { icon: <IoLogoJavascript className='exp__details-icon' />, name: 'JavaScript', level: 'Experienced' },
    { icon: <SiVite className='exp__details-icon' />, name: 'Vite', level: 'Experienced' },
    { icon: <AiFillHtml5 className='exp__details-icon' />, name: 'HTML', level: 'Experienced' },
    { icon: <FaCss3 className='exp__details-icon' />, name: 'CSS', level: 'Experienced' },
    { icon: <SiTailwindcss className='exp__details-icon' />, name: 'Tailwind', level: 'Experienced' },
    { icon: <IoLogoSass className='exp__details-icon' />, name: 'Sass', level: 'Experienced' },
  ];

  const backEndSkills = [
    { icon: <FaNodeJs className='exp__details-icon' />, name: 'Node JS', level: 'Experienced' },
    { icon: <FaGolang className='exp__details-icon' />, name: 'Golang', level: 'Intermediate' },
    { icon: <FaDocker className='exp__details-icon' />, name: 'Docker', level: 'Experienced' },
    { icon: <SiKubernetes className='exp__details-icon' />, name: 'Kubernetes', level: 'Experienced' },
    { icon: <SiHelm className='exp__details-icon' />, name: 'Helm', level: 'Experienced' },
    { icon: <FaPython className='exp__details-icon' />, name: 'Python', level: 'Intermediate' },
    { icon: <FaLinux className='exp__details-icon' />, name: 'Linux', level: 'Experienced' },
    { icon: <SiMongodb className='exp__details-icon' />, name: 'MongoDB', level: 'Experienced' },
    { icon: <GrMysql className='exp__details-icon' />, name: 'MySQL', level: 'Intermediate' },
    { icon: <SiExpress className='exp__details-icon' />, name: 'Express', level: 'Intermediate' },
  ];

  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container exp__container">
        <div className="exp__frontend">
          <h3>Frontend Development</h3>
          <div className="exp__content">

            {frontEndSkills.map((skill, index) => (
              <article key={index} className="exp__details">
                {skill.icon}
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}

          </div>
        </div>


        <div className="exp__backend">
          <h3>Backend Development</h3>
          <div className="exp__content">
            {backEndSkills.map((skill, index) => (
              <article key={index} className="exp__details">
                {skill.icon}
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>

        </div>
        <b>
          && much more
        </b>
      </motion.div>

    </section>
  )
}

export default Experience