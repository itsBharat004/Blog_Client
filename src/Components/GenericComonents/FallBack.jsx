import React from 'react'
import { Link } from 'react-router-dom'
import Top from '../Header/Top'

const FallBack = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Top/>
      <h3>you are not login yet</h3> 
      <p>  create your account <Link to="/Register"style={{color:"blue",textDecoration:"underLine"}}>signUp</Link> </p>
      <p>  Or login <Link to="/Login" style={{color:"blue",textDecoration:"underLine"}}>Login</Link> </p>
    </div>
  )
}

export default FallBack
