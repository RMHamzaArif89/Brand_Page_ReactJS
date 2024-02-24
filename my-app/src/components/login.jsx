import React from 'react'
import './css/login.css'

function Login() {
  return (
    <div className='login'> 
    <form action="" className='form'>
        <input type="email" name='email' placeholder='email'/>
        <input type="password" placeholder='passworld' name="pwd" id="" />
        <button>login</button>
    </form>
      
    </div>
  )
}

export default Login
