import { Pokedex } from './Pokedex';
import  Pokecard  from './Pokecard'


const Pokegame  = () => {
    const lista = Pokedex

    let hand1 = [];
    let hand2 = [...lista]

    while (hand2.length > hand1.length) {
        let randIdx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIdx, 1)[0];
        hand1.push(randPokemon);
    }

    let exp1 = hand1.reduce((exp, lista) => exp + lista.base_experience, 0);
    let exp2 = hand2.reduce((exp, lista) => exp + lista.base_experience, 0);


    return (
        <div className="card_final">
                 <h1>Pokemons CV</h1>
        
            <Pokecard lista={hand1} exp={exp1} isWinner={exp1>exp2} />
           
            <Pokecard lista={hand2} exp={exp2} isWinner={exp2>exp1}/>

        </div>
    )
 

}

export default Pokegame
