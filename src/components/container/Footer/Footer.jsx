import React from 'react';
import "./Footer.scss"
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity:
          1
      }}
      transition={{duration: 1.5}}
      className='footer'
    >
      <div className="copyright">
        <p>Copyright&copy;2023 All rights reserved <span>Kaddu Livingstone</span></p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon) => {
            return (
              <a href={socialIcon.link} target="_blank" rel="noreferrer">
                  {socialIcon.icon}
                </a>
            )
          })}
          </div>
      </div>
    </motion.div>
  )
}

export default Footer