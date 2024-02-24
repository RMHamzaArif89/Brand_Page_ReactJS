import React from 'react'
import './css/nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
        <div className="logo">
            <img src="/images/logo.jpg" alt="logo" />
        </div>

        <div className="list">
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
                <li><Link to='/login'>Sign-in</Link></li>
            </ul>
        </div>


        <div className="btn">
            <Link to='login'>Login</Link>
        </div>
      
    </div>
  )
}

export default Nav
