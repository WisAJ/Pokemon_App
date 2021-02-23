import './App.css';
import {remove, fruit } from './Helpers';
import { food } from './Foods';


function App() {




  return (
    <div className="App">
      Fruit Selection
      <p>{fruit}</p>
      <p>{remove(food, fruit)}</p>
      <p>{food.length}</p>
      <p>{food}</p>
    </div>

  );
}

export default App;

// console.log(fruit)
// console.log(remove(food, fruit))
// console.log(food.length)
// console.log(food)