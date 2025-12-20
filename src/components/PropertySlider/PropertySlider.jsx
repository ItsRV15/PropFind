import React, { useState, useEffect } from 'react';
import './PropertySlider.css';

const PropertySlider = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!properties || properties.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [properties]);

  if (!properties || properties.length === 0) {
    return <p>No properties available</p>;
  }

  const currentProperty = properties[currentIndex];

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Image */}
        <img
          src={`/${currentProperty.picture}`}
          alt={`Property ${currentProperty.id}`}
          className="slider-image"
        />

        {/* Details Overlay */}
        <div className="slider-details">
          <p className="slider-price">£{currentProperty.price.toLocaleString()}</p>
          <p>{currentProperty.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider;