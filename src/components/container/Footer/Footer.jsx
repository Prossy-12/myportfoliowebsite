import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright &copy;{currentYear} <span>Kaddu Livingstone</span> All rights reserved </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon) => {
            return (
              <a href={socialIcon.link} target="_blank" rel="noreferrer" key={socialIcon.link}>
                {socialIcon.icon}
              </a>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default Footer;
