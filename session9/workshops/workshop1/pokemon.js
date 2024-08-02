(() => {
  const myBody = document.createElement("body");
  const myContainer = document.createElement("div");

  const pokemons = [];

  const init = () => {
    removeBody();
    fetchPokemons();
    buildHtml();
    buildCss();
    setEvents();
  };

  const removeBody = () => {
    document.querySelector("body").remove();
    document.querySelector("html").appendChild(myBody);
  };

  const fetchPokemons = async () => {
    try {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let data = await response.json();

      fetchPokemonDetails(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchPokemonDetails = data => {
    try {
      data.forEach(object => {
        fetch(object.url)
          .then(response => {
            return response.json();
          })
          .then(pokemon => {
            pokemons.push(pokemon);
          });
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const buildHtml = () => {
    myBody.appendChild(myContainer);
    myContainer.setAttribute("class", "container");

    myContainer.innerHTML = `<div class="header-container">
            <img class="pokemon-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"/>
            <div class="top-header-section">
                <input
                    type="text"
                    class="search-bar"
                    placeholder="Search"
                />
                <p class="count">0</p>
                <select name="SortBy" class="sort-by">
                    <option>Sort by Id</option>
                    <option>Sort by Name</option>
                </select>
            </div>
            <div class="bottom-header-section">
                <div class="pokemon-button">Bring Pokemons</div>
            </div>
        </div>
        <div class="pokemon-list"></div>`;
  };

  const buildCss = () => {
    const myCss = document.createElement("style");
    document.querySelector("head").appendChild(myCss);

    myCss.innerHTML = `.container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 80%;
            border-radius: 40px;
            margin: 24px auto;
            padding: 6px;
            background-color: red;
        }
        .header-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .pokemon-icon{
            width: 250px;
        }
        .top-header-section {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
        }
        .bottom-header-section {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .pokemon-button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 140px;
            height: 40px;
            font-size: 14px;
            color: black;
            background-color: white;
            border: 2px solid black;
            border-radius: 10px;
            cursor: pointer;
        }
        .search-bar {
            width: 200px;
            height: 32px;
            margin: 10px 0;
            margin-left: 40px;
            font-size: 14px;
        }
        .sort-by {
            margin: 10px 0;
            margin-right: 40px;
            width: 200px;
            height: 32px;
        }
        .pokemon-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .card-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
            border-radius: 20px;
            width: 220px;
            height: 300px;
            padding: 12px;
            margin: 6px;
        }
        .card-container img {
            width: 160px;
        }
        .card-container p {
            font-size: large;
            font-style: italic;
            margin: 0;
        }
        .card-container h3 {
            margin: 0;
        }
        .card-container ul {
            margin: 0;
            padding: 0;
            display: flex;
        }
        .card-container li {
            font-size: large;
            list-style-type: none;
            margin-right: 4px;
        }`;
  };

  const setEvents = () => {
    const button = document.querySelector(".pokemon-button");
    const searchBar = document.querySelector(".search-bar");
    const sortBar = document.querySelector(".sort-by");

    button.addEventListener("click", () => {
      const searchedValue = searchBar.value;
      const sortedValue = sortBar.value;

      bringPokemons(searchedValue, sortedValue);
    });

    searchBar.addEventListener("input", () => {
      const searchedValue = searchBar.value;
      const sortedValue = sortBar.value;

      bringPokemons(searchedValue, sortedValue);
    });

    sortBar.addEventListener("change", () => {
      const searchedValue = searchBar.value;
      const sortedValue = sortBar.value;

      bringPokemons(searchedValue, sortedValue);
    });
  };

  const bringPokemons = (searchedValue, sortedValue) => {
    const filteredPokemons = filterPokemons(searchedValue);
    const sortedPokemons = sortPokemons(filteredPokemons, sortedValue);

    createPokemonCards(sortedPokemons);

    document.querySelector(".count").innerHTML = sortedPokemons.length;
  };

  const createPokemonCards = pokemons => {
    const pokemonListElement = document.querySelector(".pokemon-list");

    pokemonListElement.innerHTML = "";

    pokemons.forEach(pokemon => {
      const { name, id, sprites, types } = pokemon;
      const pokemonCardHtml = `<div class="card-container">
                <img class="pokemon-image" src="${sprites.front_default}"/>
                <p>${id}</p>
                <h3>${name}</h3>
                <ul>
                    ${getPokemonTypes(types)}
                </ul>
            </div>`;

      pokemonListElement.innerHTML += pokemonCardHtml;
    });
  };

  const getPokemonTypes = types =>
    types.reduce((html, type) => `${html}<li>${type.type.name}</li>`, "");

  const filterPokemons = searchedValue =>
    pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchedValue.toLowerCase())
    );

  const sortPokemons = (pokemons, sort) => {
    if (sort.toLowerCase().includes("name")) {
      return pokemons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else {
      return pokemons.sort((a, b) => a.id - b.id);
    }
  };
  init();
})();
