import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin, FaPhp, FaLaravel, FaPython, FaVuejs, FaTwitter, FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";
import { DiJavascript, DiMongodb, DiMysql, DiPhotoshop } from "react-icons/di";
import { SiJavascript, SiTensorflow, SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <FaTwitter />,
  <FaInstagram />,
  <FaLinkedin />,
  <FaYoutube />,
  <FaFacebook />,
  <FaGithub />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Kaddu Livingstone"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+256701512709"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "kaddulivingston@gmial.com"
  }
]

export const icons = [<SiJavascript />, <FaVuejs />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaLaravel />, <FaPython />, <SiTensorflow />]

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Machine Learning Developer",
    company: "Mindwise Ai"
  },
  {
    di: 2,
    year: "2022",
    position: "Open source Contributor",
    company: "OSCA Africa"
  },
  {
    di: 2,
    year: "2021",
    position: "Software Developer",
    company: "Nugsoft Technologies"
  },
  {
    id: 3,
    year: "2020",
    position: "Software Developer",
    company: "Nugsoft Technologies"
  }
]
export const finishes = [
  {
    id: 1,
    number: '3+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "46+",
    itemName: "Satisfied Customers"
  },
  {
    id: 3,
    number: "10+",
    itemName: "Designed Items"
  },
  {
    id: 4,
    number: "46+",
    itemName: "Clients Served"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Clinicplus",
    category: "Web",
    link:"https://clinicplusug.com/",
     github:"#"
  },
  {
    id: 2,
    img: work2,
    name: "Schoolmonitor",
    category: "Web",
    link:"https://schoolmonitor.net/",
     github:"#"
  },
  {
    id: 3,
    img: work3,
    name: "Mfuko",
    category: "Web",
    link:"https://mfuko.net/",
     github:"#"
  },
   {
    id: 4,
    img: work4,
    name: "Finance Planner",
    category: "Web",
    link:"https://fplanner.nugsoft.com/app/index",
     github:"#"
  },
  {
    id: 5,
    img: work6,
    name: "Self Driving care",
    category: "Machine-Learning",
    link:"https://github.com/Livingston-k/self_driving_car",
    github:"https://github.com/Livingston-k/self_driving_car"
  },
   {
    id: 7,
    img: work5,
    name: "OSCA Website",
    category: "Web",
    link:"https://oscakampala.org/",
     github:"#"
  },
]


export const workNavs = [
  "All", "Web", "App", "Machine-Learning"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Kampala Uganda"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "kaddulivingston@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+256-701512709"
  }
]
