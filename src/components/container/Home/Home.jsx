import React from 'react';
import { motion } from 'framer-motion';
import portfolio1 from "../../../assets/portfolio1.jpg";
import "./Home.scss";

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
  };

  return (
    <motion.div className="container" id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5
      }}
    >
      <div className="profile">
        <img src={portfolio1} alt="Kaddu Livingstone" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Kaddu Livingstone</span></h3>
        <span className='job'>CEO Curley AI</span>
        <span className='text'>Passionate about harnessing the power of AI and machine learning to drive positive change in Various Industries</span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          Connect with me
        </motion.a>
      
      </div>
    </motion.div>
  );
};

export default Home;
