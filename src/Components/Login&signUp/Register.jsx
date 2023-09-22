import React, { useEffect, useState } from "react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Registration.css";
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Top from "../Header/Top";
const Register = () => {
  const navigate=useNavigate();
  const [formData, setFromData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_ULR}/Register`;
    // const baseUrl="https://blog-server-mm8b.onrender.com/Register";
    // const baseUrl="http://localhost:4040/Register";
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
      console.log(res.data);
    });
    setFromData({
      name: "",
      phoneNo: "",
      email: "",
      password: "",
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    // form validation
    if (formData.name.length === 0){
      setResponse({ mess: "Enter your name" });
      console.log("1")
    }
    else if (formData.name.split(" ").length <2){
      setResponse({ mess: "Enter your full name Name" });
      console.log("1")
    }
    else if( formData.phoneNo.length <9 || formData.phoneNo.length >13 ){
      setResponse({ mess: "enter a valid phone number" });
      console.log("2")

    }
   else if ( formData.email.length === 0 ){
      setResponse({ mess: "Enter your email" });
      console.log("3")

    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)){
      setResponse({ mess: "Invalid email address" });
      console.log("4")

    }
    else if(formData.password.length === 0 ){
      setResponse({ mess: "Enter your password" });
      console.log("5")

    }
    else if(formData.password.length <6 || formData.password.length >16 ){
      setResponse({ mess: "password length must be of 6-15 characters" });
      console.log("6")

    }
   
    else {
      setSubmit(!submit);
    } 
    setTimeout(()=>{
      setResponse("");
    
     },2000)
  };
  const tostNotify=()=> toast("Registration successfull");
  
  response.token&&(function goToDashboard  (){
    tostNotify();
    setTimeout(()=>{
      console.log("settimeout")
      navigate("/Login");
    },2000) 
  }
  )();
  return (
    <>
      <div className="registrationHeader"> 
    <Top />
  </div>
    <div className="registration">
      <div className="registerContainer">
      <img className="registerImg" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg?w=2000" alt="not found" />
        
        <form className="register">
          <h1 className="registerHeading">Registration Page</h1>
          <fieldset>
            <legend>Name</legend>
            {/* Name, Phone, Email and Password */}
            {/* <PersonIcon/> */}
            <PersonOutlineOutlinedIcon/>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Phone number</legend>
            {/* Name, Phone, Email and Password */}
            {/* <LocalPhoneIcon/> */}
            <LocalPhoneOutlinedIcon/>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              placeholder="Enter your Phone number"
              required
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            {/* Name, Phone, Email and Password */}
            {/* <EmailIcon/> */}
            <EmailOutlinedIcon/>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              required
              />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            {/* Name, Phone, Email and Password */}
            {/* <LockIcon/> */}
            <LockOutlinedIcon/>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              required
            />
          </fieldset>
          {/* <div className="mess">Your are already registered</div> */}
          {response.mess &&<div className="message"><CloseIcon style={{color:"red"}}/> {response && response.mess}</div>}
          <button className="registerButton" onClick={handleClick}>
            Submit
          </button>
          <div className="goto" >
            go to <Link className="link" to={"/Login"}>Login page</Link>
          </div>
        </form>
      </div>
    </div>
        
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
             
              </>

  );
};

export default Register;
