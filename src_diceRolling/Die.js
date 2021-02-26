import './Die.css';

const Die = ({count1,count2,countChange, Rolling}) => {


    return ( 
    
    <div className="Die">
        <div><i className={`fas fa-dice-${count1}  ${Rolling && "shaking"}`}></i> </div>
        <div><i className={`fas fa-dice-${count2}  ${Rolling && "shaking"}`}></i> </div>
        {/* <button onClick={() => countChange()}> { Rolling ? 'Rolling...':'Roll Dice'}</button> */}
    </div>
     );}
 
export default Die;


