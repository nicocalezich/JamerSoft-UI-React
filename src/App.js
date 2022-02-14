import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pokemonsService from './services/pokemons'
import Card from './components/card'
import SpinBar from './components/spinbar'

const App = () => {

  const [pokemons, setPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const handleLoading = () => {
    return pokemonsService.getPokemons(pokemons? pokemons.length : 0)
  }

  const handleLoadMore = async () => {
    const resp = await handleLoading()
    setPokemons(previusState => {
      return [...previusState, ...resp]
    })
  }

  useEffect(async () => {
    const resp = await handleLoading()
    setPokemons(resp)
    setIsFetching(false)
  }, [])

  return (
    <>
      <div className='row' style={{ padding: "50px", display: "flex", justifyContent: "center" }}>
        {isFetching ? <><SpinBar /><h1 style={{ textAlign: "center" }}>Loading data</h1></> : pokemons?.map(pokemon => (<Card pokemonInfo={pokemon} />))}
      </div>
      <div style={{width: '100%', textAlign: "center", margin: "10px"}}>
        {isFetching ? <></> : <button onClick={handleLoadMore} className='btn btn-primary'>Load more</button>}
      </div>
    </>
  );
}

export default App;
