import { useState } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!firstName.trim()) {
      errors.firstName = "Please enter your first name.";
      isValid = false;
    }

    if (!lastName.trim()) {
      errors.lastName = "Please enter your last name.";
      isValid = false;
    }

    if (!phone.trim()) {
      errors.phone = "Please enter your phone number.";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Please enter your email address.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Please enter your message.";
      isValid = false;
    }
    if (isValid === false) {
      errors.validation = "Please revise your inputs.";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);

    const data = {
      firstName,
      lastName,
      phone,
      email,
      message
    };

    axios.post('https://statepos.com/kadduwebsiteapi/index.php', data, {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': '*/*'
    })
      .then((res) => {
        setResponse(res.data);
        setIsLoading(false);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setErrors({});
      })
      .catch((err) => {
        console.log(err);
        setResponse({ status: "error", message: "Error sending your message, please try again later" });
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
          <h3>Let's Talk AI</h3>
          <p className='contact_text'>I'm always excited to connect with fellow AI enthusiasts, researchers, and anyone interested in discussing Artificial Intelligence. Whether you have a project idea, want to collaborate, or just want to connect with me, feel free to reach out!</p>
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
            {socialIcons.map((socialIcon) => {
              return (
                <a href={socialIcon.link} target="_blank" rel="noreferrer">
                  {socialIcon.icon}
                </a>
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
              {errors.firstName && <div className="error">{errors.firstName}</div>}
            </div>
            <div className="row">
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              {errors.lastName && <div className="error">{errors.lastName}</div>}
            </div>
            <div className="row">
              <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              {errors.phone && <div className="error">{errors.phone}</div>}
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="row">
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              {errors.message && <div className="error">{errors.message}</div>}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Sending' : 'Send'}</span>
            </motion.button>
          </form>
          {response && (
            <div className={`message ${response.status}`}>
              {response.message}
            </div>
          )}
          {errors.validation && (
            <div className="error">
              {errors.validation}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact;
