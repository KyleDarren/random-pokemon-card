import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './Card.css'

function Card() {
    // Initialize the state
    const [pokemon, setPokemon] = useState("Pokemon");
    const [pokemon_image, setPokemonImage] = useState("n.png");

    const fetchPokemon = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");
            
            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            
            const random_num = Math.floor(Math.random() * 1118);
            const data = await response.json(); // Parsing the JSON data from the response
        
            setPokemon(data.results[random_num].name);
            try {
                const response2 = await fetch(data.results[random_num].url);
            
                // Check if the response status is OK (status code 200-299)
                if (!response2.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data2 = await response2.json();
                setPokemonImage(data2.sprites.other.dream_world.front_default);
                console.log(data2.sprites.back_default);

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }

            // setPokemonImage(data.results[random_num].url)
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <div className="main_container">
            <div className="pokemon_name"><p>{pokemon}</p></div>
            <div className="content-container">
                <div className="main_img"><img src="https://placehold.co/400" /></div> {/* {pokemon_image} */}
                <div className="text-content"></div>
            </div>
            
            <div className="buttons_container">
                {
                    // Toggle front-back
                    // Toggle shiny-normal
                    // Toggle male-female
                    // Toggle 3d
                    // Toggle showdown
                    // Toggle artwork
                    // Toggle svg
                }
                <button onClick={fetchPokemon}>Fetch</button>
            </div>
            {/* <img className='pokemon_image' src={}/> */}
        </div>
    );
}

export default Card;