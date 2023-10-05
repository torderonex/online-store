import React, { useState } from 'react';
import './style.css'
const SliderButton = ({isEnabled, setIsEnabled}) => {

  const toggleSlider = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <div className={`slider-button ${isEnabled ? 'enabled' : 'disabled'}`} onClick={toggleSlider}>
      <div className="slider-btn"></div>
      <div className={`slider-text ${isEnabled ? 'right' : 'left'}`}>
      </div>
    </div>
  );
};

export default SliderButton;
