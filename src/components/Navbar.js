import React from 'react';
import PropTypes from "prop-types";
import {useState} from 'react'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

// const[BtnText, setBtnText] = useState(props.BtnText);

  let[theme, setTheme] = useState('')

    const greenTheme = () =>{
    setTheme('green');
    document.body.style.backgroundColor = '#4fcd6a';
    props.showAlert("Green Theme has been set.", "Success")

  }
  const redTheme = () =>{
    setTheme('red');
    document.body.style.backgroundColor = '#f37c88';

    // document.body.button.className= "btn btn-outline-success";
    props.showAlert("Red Theme has been set.", "Success")
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>
          </ul>
     
          <div className={`form-check form-switch text-${props.mode==='dark'}`}>
            <button type="button" className="btn btn-outline-secondary" onClick={props.toggleMode}>{props.BtnText}</button>
          </div>
          <div className={`form-check form-switch text-${theme==='green'}`}>
          <button type="button" className="btn btn-outline-success" onClick={greenTheme}>Green</button>
          </div>
          <div className={`form-check form-switch text-${theme==='red'}`}>
          <button type="button" className="btn btn-outline-danger" onClick={redTheme}>Red</button>
          </div>
      
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};


