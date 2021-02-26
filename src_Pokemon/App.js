import React, { useState, useEffect } from 'react';
import './App.css';
import Pokegame from './Pokegame';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios';


function App() {

  const [poke, setPoke] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevtPageUrl] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevtPageUrl(res.data.previous)
        setPoke(res.data.results.map(p => p.name))
      })

    return () => cancel()
  }, [currentPageUrl])

  const goToNextPage = () => setCurrentPageUrl(nextPageUrl);
  const goToPrevPage = () => setCurrentPageUrl(prevPageUrl);


  if (loading) return '...Loading'



  return (

    <div className="App">
      <PokemonList poke={poke} />

      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />

      <Pokegame/>
    </div>

  );
}

export default App;

