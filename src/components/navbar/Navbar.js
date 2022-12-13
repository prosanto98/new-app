import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
  return (
    <header>
    <nav className="nav extra">
        <div className="container">
            <div className="main">
                <div className="logo">
                    <img src="images/logo-nav.png" alt="logo"/>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link to ="/">Home</Link></li>
                        <li><Link to ="/about">About Us</Link></li>
                        <li><Link to ="/features">Features</Link></li>
                        <li><Link to ="/pricing">Pricing</Link></li>
                        <li><Link to ="/faq">Faq</Link></li>
                        <li><Link to ="/blog">Blog</Link></li>
                    </ul>
                    <div className='contact-us'>
                        <Link to ="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar