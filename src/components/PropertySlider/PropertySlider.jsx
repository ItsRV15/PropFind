//useState → stores which property is currently shown
//useEffect → runs side effects (the auto-slide timer)

import React, { useState, useEffect } from 'react';
import './PropertySlider.css';

//properties is expected to be an array of property objects
const PropertySlider = ({ properties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);  //Keeps track of which property is currently visible
                                                        //Starts from the first property (index 0)

  useEffect(() => {  //This runs after the component renders.
    if (!properties || properties.length === 0) return; //Prevents errors if property is undefined or empty

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
    }, 2000); //Every 2000ms Increase currentIndex by 1
              //% properties.length loops back to 0 after the last item

    return () => clearInterval(interval); //stop the timer
  }, [properties]); //Effect runs again only if properties changes

  if (!properties || properties.length === 0) {
    return <p>No properties available</p>; //If no data → show a message instead of crashing
  }

  const currentProperty = properties[currentIndex];//Picks the property that should be displayed right now

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Image */}
        <img
          src={`/${currentProperty.picture}`} //Displays property image
          alt={`Property ${currentProperty.id}`}
          className="slider-image"
        />

        {/* Details Overlay */}
        <div className="slider-details">
          <p className="slider-price">£{currentProperty.price.toLocaleString()}</p>  {/*Formatted price to string*/}
          <p>{currentProperty.location}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertySlider; 
//Makes this component reusable in other files