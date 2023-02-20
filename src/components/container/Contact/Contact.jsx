import { useState, React } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      firstName,
      lastName,
      phone,
      email,
      message
    };

    fetch('https://portifolioapi.stonixgraphics.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>I'm always excited to connect with fellow developers, potential clients, and anyone interested in discussing technology. If you have a project idea or just want to chat, please don't hesitate to reach out. I would love to hear from you!</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <div key={index} >
                  {socialIcon}
                </div>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"

        >
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="row">
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
              disabled={isLoading}
            >
              {isLoading && (
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
              )}
              <span>{isLoading ? 'Sending...' : 'Send'}</span>
            </motion.button>
          </form>
          {response && (
            <div className={`message ${response.status}`}>
              {response.message}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact