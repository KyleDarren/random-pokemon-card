const captFirst = word => {
  return word[0].toUpperCase() + word.slice(1, word.length);
}

const cmtoft = number => {
  let inch = number / 2.54;
  let feet = inch / 12;
  let inches = inch % 12;
  return `${parseInt(feet)}ft  ${parseInt(inches)}in`;
}

const fetchPokemon = () => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1118')
  .then(response => response.json())
  .then(pokemon => {

    let randomPokemon = Math.floor(Math.random() * 1118);
    let pokemon_name = pokemon.results[randomPokemon].name;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then(response => response.json())
    .then(pokeDef => {
      let pokeImageSrc = pokeDef.sprites.front_default;
      let pokemon_container = document.getElementById('pokemon_container');
      let img = document.createElement("IMG");
      img.setAttribute("alt", "Resource unavailable");
      img.setAttribute("src", pokeImageSrc);
      img.setAttribute("style", "position:absolute;height:40%;width:60%;left:20%;");
      pokemon_container.removeChild(pokemon_container.childNodes[0]);
      pokemon_container.append(img);
      //name
      document.getElementById("name").innerHTML = captFirst(pokeDef.name);
      //types
      const typesArray = [];
      for (let i = 0; i < pokeDef.types.length; i++) {
        typesArray.push(captFirst(pokeDef.types[i].type.name));
      }
      document.getElementById("type").innerHTML = typesArray.toString();
      document.getElementById("height").innerHTML = cmtoft(parseInt(pokeDef.height*10));
      document.getElementById("base_exp").innerHTML = pokeDef.base_experience;
      const abilityArray = [];
      for (let i = 0; i < pokeDef.abilities.length; i++) {
        abilityArray.push(captFirst(pokeDef.abilities[i].ability.name));
      }
      document.getElementById("ability").innerHTML = abilityArray.toString();
      const _type = pokeDef.types[0].type.name.toUpperCase();
      let card = document.querySelector('.card');
      let fetch_button = document.querySelector("#fetch_pokemon");
      switch (_type) {
        case "GRASS":
          card.style.backgroundImage = "linear-gradient(#7dff17,rgb(71,255,71),#00f178)";
          card.style.border = "10px ridge #00e400";
          break;
        case "WATER":
          card.style.backgroundImage = "linear-gradient(#36e1ff,#2fc8ff,#4db1ff)";
          card.style.border = "10px ridge #1fb2ff";
          break;
        case "FIRE":
          card.style.backgroundImage = "linear-gradient(#ff9a00,#ff5a00,#ff4423)";
          card.style.border = "10px ridge #ff5200";
          break;
        case "STEEL":
          card.style.backgroundImage = "linear-gradient(#808080,#e4e4e4,#838383)";
          card.style.border = "10px ridge #676767";
          break;
        case "FAIRY":
          card.style.backgroundImage = "linear-gradient(#f38aff,#ff7ddd,#ff6cb3)";
          card.style.border = "10px ridge rgb(255,98,224)";
          break;
        case "FIGHTING":
          card.style.backgroundImage = "linear-gradient(rgb(255,41,41),rgb(255,157,75),rgb(255,41,41))";
          card.style.border = "10px ridge #ff0606";
          break;
        case "DARK":
          card.style.backgroundImage = "linear-gradient(#2e2b3a,#302d39,#251c2d)";
          card.style.border = "10px ridge #222337";
          break;
        case "ELECTRIC":
          card.style.backgroundImage = "linear-gradient(#f3ff1f,#f1ff7c,#f3ff1f)";
          card.style.border = "10px ridge #c6d100";
          break;
        case "PSYCHIC":
          card.style.backgroundImage = "linear-gradient(#ff08af,rgb(255,71,171),rgb(255,32,127))";
          card.style.border = "10px ridge rgb(225,0,149)";
          break;
        case "FLYING":
          card.style.backgroundImage = "linear-gradient(rgb(218,218,218),rgb(194,194,194),rgb(151,151,151))";
          card.style.border = "10px ridge rgb(121,121,121)";
          break;
        case "NORMAL":
          card.style.backgroundImage = "linear-gradient(rgb(255,220,164),rgb(255,216,124),rgb(245,201,104))";
          card.style.border = "10px ridge rgb(255,197,78)";
          break;
        case "GHOST":
          card.style.backgroundImage = "linear-gradient(#37267a,#121d72,#574f8e)";
          card.style.border = "10px ridge #231294";
          break;
        case "POISON":
          card.style.backgroundImage = "linear-gradient(#af14ff,#d16dff,#af1cff)";
          card.style.border = "10px ridge #9804db";
          break;
        case "ICE":
          card.style.backgroundImage = "linear-gradient(#06fdff,#b0fffe,#12fffd)";
          card.style.border = "10px ridge #00d6e7";
          break;
        case "ROCK":
          card.style.backgroundImage = "linear-gradient(#939393,#808080,#646464,#454545)";
          card.style.border = "10px ridge #414141";
          break;
        case "BUG":
          card.style.backgroundImage = "linear-gradient(rgb(68,177,7),rgb(186,128,0))";
          card.style.border = "10px ridge rgb(124,168,33)";
          break;
        case "DRAGON":
          card.style.backgroundImage = "linear-gradient(#ff8b08,#ffca00,#ff622b)";
          card.style.border = "10px ridge #cd7b00";
          break;
        case "GROUND":
          card.style.backgroundImage = "linear-gradient(rgb(191,121,15),rgb(194,153,28),rgb(169,115,11))";
          card.style.border = "10px ridge rgb(191,122,0)";
          break;
      }
    });
  });
}
fetchPokemon();
