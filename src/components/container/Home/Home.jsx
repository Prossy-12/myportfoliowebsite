import React from 'react';
import { motion } from 'framer-motion';
import portfolio1 from "../../../assets/love.jpg";
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
        <img src={portfolio1} alt="Proscovia Nalwoga" />
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Proscovia Nalwoga</span></h3>
        <span className='job'></span>
        <span className='text'> Passionate about backend development and skilled in JavaScript.

</span>
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
