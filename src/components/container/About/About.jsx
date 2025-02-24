import React from 'react';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from "../../../assets/lw.jpg";
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
            alt='Proscovia Nalwoga'
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>I am Proscovia Nalwoga, I am deeply passionate about backend development, where I enjoy building the server-side logic that powers dynamic applications. The ability to create robust APIs and manage databases excites me, as I love solving complex problems and optimizing performance.

JavaScript, particularly with frameworks like Node.js, allows me to craft efficient and scalable solutions. I thrive on the challenge of integrating different systems and ensuring seamless data flow.

Through my projects, I aim to create meaningful user experiences by delivering reliable and secure applications. I’m continually exploring new technologies and best practices to enhance my skills and contribute to the ever-evolving tech landscape.</p>
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
