import React, { useState } from 'react';
import './ScoreCard.css';

function ScoreCard ({ string_heading, initialScore, initialWeeks, initialUploads, initialWeek }) {
  // const [score, setScore] = useState(initialScore);
  // const [weeks, setWeeks] = useState(initialWeeks);
  // const [uploads, setUploads] = useState(initialUploads);
  // const [week, setWeek] = useState(initialWeek);

  console.log(string_heading  == "Overall Skin score:");

  return (
    <div className="skin-score-card" style={{ 
      backgroundColor: string_heading === "Overall Skin score:" ? "#FFF3EB" : "#FFECF3"
    }}>
      <div className="score-header">{string_heading}</div>
      <div className="score-card-overview">
      <div className="score">{initialScore}</div>
      <div className="details">
        <div className="weeks">
          <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11C6.20933 11 8 9.625 8 7.21875C8 6.1875 7.66667 4.46875 6.33333 3.09375C6.5 4.125 5.5 4.46875 5.5 4.46875C6 2.75 4.66667 0.34375 2.66667 0C2.90467 1.375 3 2.75 1.33333 4.125C0.5 4.8125 0 6.00119 0 7.21875C0 9.625 1.79067 11 4 11ZM4 10.3125C2.89533 10.3125 2 9.625 2 8.42188C2 7.90625 2.16667 7.04688 2.83333 6.35938C2.75 6.875 3.33333 7.21875 3.33333 7.21875C3.08333 6.35938 3.66667 4.98438 4.66667 4.8125C4.54733 5.5 4.5 6.1875 5.33333 6.875C5.75 7.21875 6 7.81275 6 8.42188C6 9.625 5.10467 10.3125 4 10.3125Z" fill="#E75151"/>
          </svg>
           <span>{initialWeeks} weeks</span>
        </div>
        <div className="uploads">
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.1 0C8.33869 0 8.56761 0.105357 8.7364 0.292893C8.90518 0.48043 9 0.734784 9 1V8C9 8.26522 8.90518 8.51957 8.7364 8.70711C8.56761 8.89464 8.33869 9 8.1 9H0.9C0.661305 9 0.432387 8.89464 0.263604 8.70711C0.0948211 8.51957 0 8.26522 0 8V1C0 0.734784 0.0948211 0.48043 0.263604 0.292893C0.432387 0.105357 0.661305 0 0.9 0H8.1ZM8.1 1H0.9V6.05L3.14775 3.553C3.19998 3.49495 3.262 3.44889 3.33026 3.41747C3.39851 3.38606 3.47167 3.36988 3.54555 3.36988C3.61943 3.36988 3.69259 3.38606 3.76084 3.41747C3.8291 3.44889 3.89111 3.49495 3.94335 3.553L5.7726 5.586L6.3297 4.967C6.38193 4.90895 6.44395 4.86289 6.51221 4.83147C6.58046 4.80006 6.65362 4.78388 6.7275 4.78388C6.80138 4.78388 6.87454 4.80006 6.94279 4.83147C7.01105 4.86289 7.07306 4.90895 7.1253 4.967L8.1 6.0505V1ZM6.075 2C6.25402 2 6.42571 2.07902 6.5523 2.21967C6.67888 2.36032 6.75 2.55109 6.75 2.75C6.75 2.94891 6.67888 3.13968 6.5523 3.28033C6.42571 3.42098 6.25402 3.5 6.075 3.5C5.89598 3.5 5.72429 3.42098 5.5977 3.28033C5.47112 3.13968 5.4 2.94891 5.4 2.75C5.4 2.55109 5.47112 2.36032 5.5977 2.21967C5.72429 2.07902 5.89598 2 6.075 2Z" fill="#DD7700"/>
        </svg>
        <span>{initialUploads} uploads</span>
        </div>
      </div>
    </div>
    <div className="progress">
        
        <div className="progress-bar">
          <div className="progress-bar-filled" style={{ width: `${(initialWeek / 54) * 100}%` }}></div>
        </div>
        <span> Week: {initialWeek}/54</span>
      </div>
    </div>
    
  );
};

export default ScoreCard;