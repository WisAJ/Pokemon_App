import React, { useState } from 'react';


function Bulbs() {
    const [on, setOn] = useState(false);
  
    const lightOn = () => setOn(true);
    const lightOff = () => setOn(false);
  
    return (
      <>
        <div className={on ? 'bulb-on' : 'bulb-off'} />
  
        <button onClick={lightOn}>{on ? 'bulb-on' : 'bulb-off'}</button>
        <button onClick={lightOn}>On</button>
        <button onClick={lightOff}>Off</button>
      </>
    );
  }
  

  // This is a very simple example of how to use state and text manipulation.