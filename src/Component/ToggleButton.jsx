import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };

  return (

    <div className={`toggle-container ${isOn ? 'on' : 'off'}`}>

      <button onClick={handleToggle} >
        {isOn ? 'On' : 'Off'}
      </button>
      <p>Welcome</p>
    </div>
  );
};

export default ToggleButton;