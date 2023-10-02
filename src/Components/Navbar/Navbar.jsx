import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
            <img src="src\assets\logo.png" id='logo'/>
        </div>
        <div className="nav-items">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>TESTIMONIALS</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <div className="enquire">
            <div className="button">ENQUIRE</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
