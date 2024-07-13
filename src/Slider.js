import { useState, useEffect } from "react";
import './Slider.css';

function Slider ({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); 
    };

    useEffect(() => {
        const interval = setInterval(() => {
          nextImage();
        }, 6000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

  return (
    <div className="image-slider">
      
      <div className="slider-image">
        {images[currentIndex]}
      </div>
      
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Slider;