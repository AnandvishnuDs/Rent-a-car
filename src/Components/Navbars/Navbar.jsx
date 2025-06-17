import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='navbar'>
      <Link to="/"> <img src="../../../public/Images/logoes.png" alt="logo" className='logo' /></Link>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`pages ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/deal" className='link'>Deals</Link></li>
        <li><Link to="/fleet" className='link'>Fleet</Link></li>
        <li><Link to="/about" className='link'>About Us</Link></li>
        <li><Link to="/contact" className='link'>Contact</Link></li>
      </ul>

      <label className="switch">
        <button type='login'><Link to={"/login"}className='login'>Login/Signup</Link></button>
      </label>
    </nav>
  )
}

export default Navbar;