import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';


function Navigation() {
    const [isClick,setIsClick]=useState(false);
    const [className,setClassName]=useState('closeHamburger');
    const [navClassName,setNavClassName]=useState("nav");

    const handleClick=()=>{
        setIsClick(!isClick);
      
        if(!isClick) {
          setClassName('openHamburger')
           setNavClassName('openNav')

        }else{
          setClassName('closeHamburger')
          setNavClassName('nav')

        }
    }
    
    const [token,setToken] =useState(localStorage.getItem("token"));
    const handleLogOut=()=>{
      setToken(localStorage.removeItem("token"));
    }
  return (
    <>
    <div className='hamburger' onClick={handleClick}>
 <div className={className}></div>
 <div className={className}></div>
 <div className={className}></div>
 </div>
 <div className={navClassName}>
    <NavLink  onClick={handleClick} to='/'          style={({ isActive }) => ({  color: isActive ? 'rgb(20, 166, 239)' : 'black' })} >Home</NavLink>
    <NavLink  onClick={handleClick} to='/Bollywood' style={({ isActive }) => ({  color: isActive ? 'rgb(20, 166, 239)' : 'black' })} >Bollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Hollywood' style={({ isActive }) => ({  color: isActive ? 'rgb(20, 166, 239)' : 'black' })} >Hollywood</NavLink>
    <NavLink  onClick={handleClick} to='/Technology'style={({ isActive }) => ({  color: isActive ? 'rgb(20, 166, 239)' : 'black' })} >Technology</NavLink>
    <NavLink  onClick={handleClick} to='/Fitness'   style={({ isActive }) => ({  color: isActive ? 'rgb(20, 166, 239)' : 'black' })} >Fitness</NavLink>
    <NavLink  onClick={handleClick} to='/Food'      style={({ isActive }) => ({  color: isActive ? 'rgb(20, 166, 239)' : 'black' })} >Food</NavLink>
    {!token && <NavLink  onClick={handleClick} to='/Login'     className="registerBtn">Login</NavLink>}
    {!token && <NavLink  onClick={handleClick} to='/Register'  className="registerBtn">signUp</NavLink>}
    {token && <div  onClick={handleLogOut} to='/Register'  className="registerBtn">Log out</div>}
  </div>


 </>
  )
}

export default Navigation