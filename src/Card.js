import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './Card.css'

// Check pokeapi to understand the logic of the program better

function Card() {
    // Initialize the state
    const [pokemon_name, setPokemonName] = useState("Pokemon");
    const [pokemon_image, setPokemonImage] = useState("n.png");
    const [pokemon_data, setPokemonData] = useState("");
    const [face_direction, setFaceDirection] = useState("front");
    const [gender, setGender] = useState("male");
    const [appearance, setApperance] = useState("normal");

    // This function is use for loading the pokemon image
    const loadPokemonImage = async (data, random_num) => {
        try {

            // Wait until the fetching of data is finished
            const response = await fetch(data.results[random_num].url);
        
            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data2 = await response.json();

            // Put the data to a variable so that it can be accessed by other function for modifying images
            setPokemonData(data2)
            setPokemonImage(data2.sprites.front_default);
            

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // This function is use to fetch random pokemon data from pokeapi
    const fetchPokemon = async () => {
        try {
            // Wait for the fetching proccess to finish before initializing to response
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");
            
            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            
            // Generate a random number from 1 to 1118
            const random_num = Math.floor(Math.random() * 1118);
            
            // Parsing the JSON data from the response
            const data = await response.json();

            // Set the name of the chosen Pokemon
            setPokemonName(data.results[random_num].name);

            // Load the pokemon image
            loadPokemonImage(data, random_num);

            // Set attributes to default
            setFaceDirection("front");
            setApperance("normal");
            setGender("male");
            
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    const toggleFrontBack = () => {
        if (face_direction === "front") {
            if (gender === "male") {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.back_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.back_shiny);
                }
            } else {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.back_female);
                } else {
                    setPokemonImage(pokemon_data.sprites.back_shiny_female);
                }
            }
            setFaceDirection("back");
        } else {
            if (gender === "male") {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.front_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.front_shiny);
                }
            } else {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.front_female);
                } else {
                    setPokemonImage(pokemon_data.sprites.front_shiny_female);
                }
            }
            setFaceDirection("front");
        }
        
    }

    const toggleShowdown = () => {
        if (face_direction === "front") {
            if (appearance === "normal") {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.other.showdown.front_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.other.showdown.front_female);
                }
            } else {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.other.showdown.front_shiny);
                } else {
                    setPokemonImage(pokemon_data.sprites.other.showdown.front_shiny_female);
                }
            }
        } else {
            if (appearance === "normal") {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.other.showdown.back_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.other.showdown.back_female);
                }
            } else {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.other.showdown.back_shiny);
                } else {
                    setPokemonImage(pokemon_data.sprites.other.showdown.back_shiny_female);
                }
            }
        }
    }

    const toggleShinyNormal = () => {
        if (appearance === "normal") {
            if (face_direction === "front") {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.front_shiny);
                } else {
                    setPokemonImage(pokemon_data.sprites.front_shiny_female);
                }
            } else {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.back_shiny);
                } else {
                    setPokemonImage(pokemon_data.sprites.back_shiny_female);
                }
            }
            setApperance("shiny");

        } else {
            if (face_direction === "front") {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.front_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.front_female);
                }
            } else {
                if (gender === "male") {
                    setPokemonImage(pokemon_data.sprites.back_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.back_female);
                }
            }
            setApperance("normal");
        }
        
        
    }

    const toggleMaleFemale = () => {
        if (gender === "male") {
            if (face_direction === "front") {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.front_female);
                } else {
                    setPokemonImage(pokemon_data.sprites.front_shiny_female);
                }
            } else {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.back_female);
                } else {
                    setPokemonImage(pokemon_data.sprites.back_shiny_female);
                }
            }
            setGender("female");
        } else {
            if (face_direction === "front") {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.front_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.front_shiny);
                }
            } else {
                if (appearance === "normal") {
                    setPokemonImage(pokemon_data.sprites.back_default);
                } else {
                    setPokemonImage(pokemon_data.sprites.back_shiny);
                }
            }
            setGender("male");
        }
    }

    const make3d = () => {
        if (appearance === "normal") {
            if (gender === "male") {
                setPokemonImage(pokemon_data.sprites.other.home.front_default);
            } else {
                setPokemonImage(pokemon_data.sprites.other.home.front_female);
            }
        } else {
            if (gender === "male") {
                setPokemonImage(pokemon_data.sprites.other.home.front_shiny);
            } else {
                setPokemonImage(pokemon_data.sprites.other.home.front_shiny_female);
            }
        }
    }

    const makeArtwork = () => {
        if (appearance === "normal") {
            setPokemonImage(pokemon_data.sprites.other["official-artwork"].front_default);
        } else {
            setPokemonImage(pokemon_data.sprites.other["official-artwork"].front_shiny);
        }
    }

    const makeSVG = () => {        
        if (gender === "male") {
            setPokemonImage(pokemon_data.sprites.other.dream_world.front_default);
        } else {
            setPokemonImage(pokemon_data.sprites.other.dream_world.front_female);
        }
    }

    return (
        <div className="main_container">
            <div className="pokemon_name"><p>{pokemon_name}</p></div>
            <div className="content-container">
                <div className="main_img"><img src={pokemon_image} /></div> {/* "https://placehold.co/400" */}
                <div className="text-content">
                    <p>Face Direction: {face_direction}</p>
                    <p>Appearance: {appearance}</p>
                    <p>Gender: {gender}</p>
                </div>
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
                <div>
                    <button onClick={toggleFrontBack}>Front-Back</button>
                    <button onClick={toggleShinyNormal}>Shiny-Normal</button>
                    <button onClick={toggleMaleFemale}>Male-Female</button>
                </div>
                <div>
                    <button onClick={fetchPokemon}>Fetch</button>
                    <button onClick={toggleShowdown}>Showdown</button>
                </div>
                <div>
                    <button onClick={make3d}>3d</button>
                    <button onClick={makeArtwork}>Artwork</button>
                    <button onClick={makeSVG}>SVG</button>
                </div>
                

            </div>
            {/* <img className='pokemon_image' src={}/> */}
        </div>
    );
}

export default Card;