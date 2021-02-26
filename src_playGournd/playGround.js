import React, { useState } from 'react';


function Bulbs() {
    const [on, setOn] = useState(false);
    const [count, setCount] = useState(1);
  
    const lightOn = () => setOn(true);
    const lightOff = () => setOn(false);

    const Counter = () => {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 3);
    }
  
    return (
      <div className='App'>
        <p></p>
        <div className={on ? 'bulb-on' : 'bulb-off'} />
  
        <button onClick={lightOn}>{on ? 'bulb-on' : 'bulb-off'}</button>
        <button onClick={lightOn}>On</button>
        <button onClick={lightOff}>Off</button>
        <button onClick={Counter}>Counter:{count} </button>
      </div>
    );
  }
  export default Bulbs;