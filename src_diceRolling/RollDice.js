import React, { useState } from 'react';
import Die from './Die';
import './RollDice.css';



const Rolldice = () => {

    const [count1, setCount1] = useState("one");
    const [count2, setCount2] = useState("one");
    const [isRolling, setIsRolling] = useState(false);

    let randIdx1 = Math.floor(Math.random() * 6) + 1 ;
    let randIdx2 = Math.floor(Math.random() * 6) + 1 ;
    
    var converter = require('number-to-words');
    
    let randIx1 = (converter.toWords(randIdx1))
    let randIx2 = (converter.toWords(randIdx2))

    const countChange = () => { 
                setCount1({ count1: randIx1 });
                setCount2({ count2: randIx2 });
                setIsRolling(true);

        // wait one second, then set rolling to false
        setTimeout (() => {
            setIsRolling(false);
          }, 1000);
    
    }
      
    // In fact you can remove toString and still works fine!!!!!
    var fofo1 = Object.values(count1).join('').toString()
    var fofo2 = Object.values(count2).join('').toString()
    console.log('that is fofo1',fofo1)
    console.log('that is fofo2',fofo2)
    

    return ( <div className="RollDice RollDice-container">
                
          <Die count1={fofo1}  count2={fofo2}  countChange={countChange}  Rolling={isRolling}/>

          <button onClick={() => countChange()} disabled={isRolling}> 
          {isRolling ? "Rolling..." : "Roll Dice!"}
          
          </button>
    </div> 
    );}
  
export default Rolldice;


    // const fa1 =  "fas fa-9x fa-dice-"
    // const fa2 =  "fas fa-9x fa-dice-"


    // let fa = () => { 
    //     const fafa1 =  `${fa1}${count1}`
    //     const fafa2 =  `${fa2}${count2}`
    //     console.log('this is fafa1',fafa1)
    

    //     return (
    //         <div>
    //             <p><i className={fafa1}></i></p>
    //             <p><i className={fafa2}></i></p>
    //         </div>
    //         )
    //     }

    //  You do NOT need join or toString, it works fine without it. 
    // var fofo1 = Object.values(count1).join('').toString()
    // var fofo2 = Object.values(count2).join('').toString()
