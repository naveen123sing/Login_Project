import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Horse Riding</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
        <ul>
          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">About Center</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Service</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Event</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">Cart</a>
          </li>
        </ul>
        <button>Contect Us</button>
      </nav><hr />
      <div className='Heading-content'>
        <div className='Heading'>Fully Certified Horse Riding Center</div>
        <p>Whether you're an experienced rider or a curious newcomer, our sanctuary invites you to explore the depths of this extraordinary partnership.</p>
        <div className='btn'>
          <button>Learn More</button>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar