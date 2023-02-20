import React from 'react'
import portfolio1 from "../../../assets/portfolio1.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio1} alt="Kaddu Livingstone" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Kaddu Livingstone</span> </h3>
        <span className='job'>Senior Software Developer</span>
        <span className='text'>Passionate<br /> about crafting innovative <br />  Software Products.</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          connect with me</motion.a>
        <div
          className="web"

        >
          Machine Learning Engineer
        </div>
        <div
          className="ui"
        >
          Software Developer
        </div>
        <div
          className="freelance"
        >
          Freelancer
        </div>
      </div>
    </motion.div>
  )
}

export default Home