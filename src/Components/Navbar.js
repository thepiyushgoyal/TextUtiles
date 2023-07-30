import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Themes
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">
            <div class={`form-check form-switch text-black`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable RedMode</label>
            </div>              
              </a></li>
            <li><a className="dropdown-item" href="/">
            <div class={`form-check form-switch text-black`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable BlueMode</label>
            </div>              
              </a></li>
            <li><a className="dropdown-item" href="/">
            <div class={`form-check form-switch text-black`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable DefaultMode</label>
            </div>              
              </a></li>
          </ul>
        </li>
      </ul>
      <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
    </div>
    
    </div>
  </div>
</nav>
    </div>
  )
}

Navbar.propTypes = { title: PropTypes.string
}

Navbar.defaultProps = {
    title: "set Title here"
}