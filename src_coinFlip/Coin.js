import React from "react";
import "./Coin.css";


const Coin = ({ side, count, head, tail }) => {



  return (<div className='Coin'>

    {count && <img src={side === 1 ? 'head.jpg' : 'tail.jpg'} alt={side === 1 ? 'head' : 'tail'} />}
    {count && <p> The total count is {count}.</p>}
    <p> The total Head count is {head} and the total of tail counts is {tail}.</p>

  </div>


  );
}

export default Coin;
