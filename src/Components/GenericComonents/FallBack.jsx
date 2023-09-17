import React from 'react'
import { Link } from 'react-router-dom'

const FallBack = () => {
  return (
    <div>
      <h1>you are not login yet</h1> 
      <h2>  create your account <Link to="/Register">signUp</Link> </h2>
      <h2>  Or login <Link to="/Login">Login</Link> </h2>
    </div>
  )
}

export default FallBack
