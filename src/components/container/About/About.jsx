import React from 'react';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/portfolio.jpg";
import "./About.scss";

const About = () => {

  return (
    <div className="container" id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={portfolio}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
            alt='Kadddulivingston'
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>I am Kaddu Livingstone, a passionate computer scientist and AI research engineer based in Kampala, Uganda. As the founder and CEO of Curely AI, I am dedicated to leveraging AI and machine learning to revolutionize healthcare, security, transportation,    Agriculture and other business sectors. My expertise lies in developing innovative solutions that drive positive change in these fields. Feel free to connect with me through my social media platforms.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          
        </motion.div>

      </div>

    </div>
  );
};

export default About;
