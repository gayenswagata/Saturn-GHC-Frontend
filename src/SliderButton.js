import React, { useState, useRef } from 'react';

function SliderButton ({instagramSVG, title}) {

  return (
    <button className="view-all-trackers-button">
        <div className="instagram-icon">
            {instagramSVG}
        </div>
        <div className='view-all-title'>
        {title} <span className="arrow"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 11.4725L4.94467 6.5L0 1.5275L1.52227 0L8 6.5L1.52227 13L0 11.4725Z" fill="white"/>
        </svg>
        </span>
        </div>
        
        
      </button>
  );
};

export default SliderButton;