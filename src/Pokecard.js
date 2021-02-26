import { Pokedex } from './Pokedex'



const Pokecard = ({lista, exp, isWinner}) => {

 
    const pic = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
    console.log(lista)
    

    const listItems = lista.map((pockemon) => {

        const xpic = pockemon.id <= 999 ? `00${pockemon.id}`.slice(-3): pockemon.id
        const picx = `${pic}${xpic}.png`

        return (
            <div key={pockemon.id} className="card">
                <h2 className="card__block"> Hello I am {pockemon.name}</h2>
                <img className="card__image" src={picx} />
                <h4 className="card__h4">Type: {pockemon.type}</h4>
                <h4 className="card__h4"> Exp: {pockemon.base_experience}</h4>
            </div>)
            });

            let title =  isWinner ? <h3 className='winner'> This group is a Winner </h3> : <h3 className='loser'> This group is a Loser </h3>;
        

    return (
        <div>
        
        <h2>Total Exp Score for this group is {exp}</h2>
        {title}

        <div className="card_final">
         {listItems}
        </div>
        </div>
    )

}

export default Pokecard;

//  This was my solution, and it works just fine.
// let x = 0
// if (pockemon.id < 10) {
//     x = '00'
// } else if
//     (pockemon.id < 99) {
//     x = '0'
// }

// let xpic = x + pockemon.id
// console.log(xpic)
//  <h2> This group is Winner {isWinner ? 'Winner':'Loser'} </h2>




