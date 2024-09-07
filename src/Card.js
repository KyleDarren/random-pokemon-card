import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './Card.css'

function Card() {
    // Initialize the state
    const [pokemon, setPokemon] = useState("Pokemon")

    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118');
            
            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json(); // Parsing the JSON data from the response
            console.log(data); // Using the data, e.g., logging it to the console
            setPokemon(data.results[Math.floor(Math.random() * 1118)].name)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <div className="main_container">
            <p className="pokemon_name">{pokemon}</p>
            <button className="fetch_button" onClick={fetchPokemon}>Fetch</button>
            {/* <img className='pokemon_image' src={}/> */}
        </div>
    );
}

export default Card;