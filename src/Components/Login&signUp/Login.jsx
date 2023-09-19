import React, { useEffect, useState } from "react";
// import img from "../assets/img.jpg";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Top from "../Header/Top";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFromData] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState("");
  useEffect(() => {
    const baseUrl = `${import.meta.env.VITE_ULR}/Login`;
    // const baseUrl = "https://blog-server-mm8b.onrender.com/Login";
    // const baseUrl = "http://localhost:4040/Login";
    
    axios.post(baseUrl, formData).then((res) => {
      setResponse(res.data);
      console.log(res.data);
    });
  }, [submit]);
  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();

    if (
      formData.email != 0 &&
      formData.password != 0
    ) {
      setSubmit(!submit);
    
      // goToDashboard();
    } else {
      setResponse({ message: "fill the form" });
    }

  };
  response.token&&(function goToDashboard  (){
    setTimeout(()=>{
      setFromData({
        email: "",
        password: "",
      })
      localStorage.setItem("token", response.token);
    navigate("/");
      
     },2000) 
  }
)();

  return (
    <>
       <div className="registrationHeader">
    
        <Top />

      </div>
    <div className="registration">
     
        <div className="registerContainer loginContainer">
          <img className="registerImg" src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1481.jpg?w=2000" alt="not found" />
       

          <form className="register">
            <h1 className="registerHeading">Login Page</h1>
          
        
            <fieldset>
              <legend>Email</legend>
              {/* Email and Password */}
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
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                required
              />
            </fieldset>
            {/* <div className="message">Your are already registered</div> */}
            <div className="message">{response && response.message}</div>
            <button className="registerButton " onClick={handleClick}>
              Login 
            </button>
            <div className="goto">
              go to <Link className="link" to={"/Register"}>Register page</Link>
            </div>
          </form>
        </div>
     
    </div>
    </>

  );
};

export default Login;
