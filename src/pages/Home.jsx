import React, { useState, useEffect } from 'react';

const Home = () => {

    const [pokemon, setPokemon] = useState([])

    const randomId = JSON.stringify(Math.floor(Math.random() * (151 - 1 + 1) + 1))

    useEffect( () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(res => res.json())
        .then(res => setPokemon([res]))
    },[])


    const GetRandom = () => {

            fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(res => res.json())
            .then(res => setPokemon([res]))
    }

    return(
        <>
        <h1>Hey that's Home</h1>
        {pokemon.map( e =>(
            <>
            <button onClick={GetRandom}>Random Pokemon ?</button>
            <img src={e.sprites.back_default} alt="img  " />
            <p>Name : {e.name}</p>
            <p>Height : {e.height}</p>
            <p>Type : {e.types[0].type.name}</p>
            <p>Weight : {e.weight}</p>
            </>
        ))} 

        </>
    )
}
export default Home