import React from 'react'
import './Header.css'
import Logo from '../../assets/logo3.png'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} className='logo' alt="" />

        <ul className='menus'>
            <li>Home</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Subscription Plans</li>
            <li>Testimonials</li>
        </ul>
    </div>
  )
}

export default Header