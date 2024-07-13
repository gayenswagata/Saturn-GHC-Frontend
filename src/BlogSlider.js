import React, { useState, useRef } from 'react';
import './blogslider.css';
import Blog from './Blog';

function BlogSlider ({cards, category}) {
    const listRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX - listRef.current.offsetLeft);
        setScrollLeft(listRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX - listRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        listRef.current.scrollLeft = scrollLeft - walk;
    };

  

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h2>{category}</h2>
        <button className="view-all">View all</button>
      </div>
      <div className='blog-grid'>
      <div className='blog-card'>
        <ul
        className={`list ${isDragging ? '-active' : ''}`}
        ref={listRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card, index) => (
          <li key={index} className="card" style={{ backgroundImage: `url(${card.img})` }}>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
      </div>
    </div>
  );
};

export default BlogSlider;