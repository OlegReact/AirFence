import React, { useEffect, useState } from "react";
import '../App.css';
import './Button.css';
import './HeroSection.css';
import { Link } from 'react-router-dom'

const classes = `btn btn--outline btn--large`

function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

const handleButtonClick = () => {
  setShowPopup(true);
}

const handleButtonClose = () => {
  setShowPopup(false);
}

  return (
    <div className='hero-container'>
      <div className='videobackground'>
      <video src='/videos/Trailer.mp4' autoPlay loop muted />
      </div>
      <h1>TRAVEL SAFELY</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Link to='/get-started' className='btn-mobile'>
          <button
            className={classes}
          >
            GET STARTED
          </button>
        </Link>
          <button
            className={classes}
            onClick={handleButtonClick}
          >
            WATCH TRAILER <i className='far fa-play-circle' />
          </button>
      </div>
      {showPopup && (
<div className="popupDark"
onClick={handleButtonClose}>
  <div className="popup">
    <div className="popupContent">
      <video style={{'borderRadius':'25px'}}
      width="100%"
      src='/videos/Trailer.mp4' autoPlay loop />
      </div>
      </div>
  </div>
)}
    </div>
  );
}

export default HeroSection;
