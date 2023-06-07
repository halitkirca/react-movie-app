import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <div className='nav'>
      <button onClick={() => {navigate("/")}}>React Movie App</button>
      <div>
        <button>Login</button>
        <button>Register</button>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar