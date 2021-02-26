import React from 'react'

export default function PokemonList({poke}) {

    console.log('I am PokemonList Poke',poke)
   
    const pok = poke.map( p => (
        <div key={p}>{p}</div>)
     ) 

    return (
        <div>
          {pok}
        </div>
    )
}
