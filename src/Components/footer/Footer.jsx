import React from "react"
import "./FooterStyle.css"
import Top from '../Header/Top'
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material"
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link } from "react-router-dom"
const Footer = () => {
  const handleClick=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    
      <div className="footer">
      {/* constainer 1*/}
      <div className="footerContainer">
      <h1 className="fotterSiren"><Top/></h1>
      <div className="fotterBlogExplaine">“Blogging is hard because of the grind required to stay interesting and relevant.”</div>
      <div className="fotterSocialMedia">
        <Instagram/> <Facebook/> <LinkedIn/> <Twitter/>
      </div>
  
      </div>
          {/* constainer 2*/}
          <div className="footerContainer">
      <h1 className="fotterSiren">Services</h1>
      <Link to='/'         onClick={handleClick} className='FooterNonActiveNav'>Home</Link>
    <Link to='/Bollywood'  onClick={handleClick} className='FooterNonActiveNav'>Bollywood</Link>
    <Link to='/Hollywood'  onClick={handleClick} className='FooterNonActiveNav'>Hollywood</Link>
    <Link to='/Technology' onClick={handleClick} className='FooterNonActiveNav'>Technology</Link>
    <Link to='/Fitness'    onClick={handleClick} className='FooterNonActiveNav'>Fitness</Link>
    <Link to='/Food'       onClick={handleClick} className='FooterNonActiveNav' >Food</Link>
      </div>
      {/* constainer 3 */}
      <div className="footerContainer">
      <h1 className="Resources">Resources</h1>
      <div className="help">Help</div>
      <div className="help">About</div>
      <div className="help">Contact Us</div>
      </div>
      {/* constainer 4*/}
      <div className="footerContainer">
      <h1 className='readMore'>More</h1>
       <a href="tel:23233244" target="_blank">+9123456789</a>
       <a href="mailto:@yashgupta1mole@gmail.com" target="_blank">mail us</a>
      <div className="copyRight"> <CopyrightIcon/>Made by Yash Gupta</div>
      </div>
      </div>
  
  )
}

export default Footer
