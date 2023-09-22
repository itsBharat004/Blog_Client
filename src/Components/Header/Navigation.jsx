import React,{useState} from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const tostNotify=()=> toast("you are login out");
    const handleLogOut=()=>{
     tostNotify()
      setTimeout(()=>{
        setToken(localStorage.removeItem("token"));
      },2000)
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
    {!token && <NavLink  onClick={handleClick} to='/Login'     className="registerBtn">Register</NavLink>}
    {token && <div  onClick={handleLogOut} to='/Register'  className="registerBtn">Log out</div>}
  </div>

<div style={{position:'absolute'}}>
  <ToastContainer 
    position="top-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />

</div>
 </>
  )
}

export default Navigation