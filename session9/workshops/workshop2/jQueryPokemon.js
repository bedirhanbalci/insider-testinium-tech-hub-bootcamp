$(document).ready(function () {
  const $body = $("body");
  const $container = $("<div>").addClass("container");
  const pokemons = [];

  const init = () => {
    buildHtml();
    setEvents();
    fetchPokemons();
  };

  const buildHtml = () => {
    $body.empty().append($container);
    $container.html(`
      <div class="header-container">
        <img class="pokemon-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"/>
        <div class="top-header-section">
          <input type="text" class="search-bar" placeholder="Search"/>
          <p class="count">0</p>
          <select name="SortBy" class="sort-by">
            <option>Sort by Id</option>
            <option>Sort by Name</option>
          </select>
        </div>
      </div>
      <div class="pokemon-list"></div>
    `);
  };

  const setEvents = () => {
    $(".search-bar").on("input", function () {
      const searchedValue = $(this).val();
      const sortedValue = $(".sort-by").val();
      bringPokemons(searchedValue, sortedValue);
    });

    $(".sort-by").on("change", function () {
      const searchedValue = $(".search-bar").val();
      const sortedValue = $(this).val();
      bringPokemons(searchedValue, sortedValue);
    });
  };

  const fetchPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      fetchPokemonDetails(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchPokemonDetails = async data => {
    try {
      const promises = data.map(async object => {
        const response = await fetch(object.url);
        const pokemon = await response.json();
        pokemons.push(pokemon);
      });
      await Promise.all(promises);
      bringPokemons("", "Sort by Id");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const bringPokemons = (searchedValue, sortedValue) => {
    const filteredPokemons = filterPokemons(searchedValue);
    const sortedPokemons = sortPokemons(filteredPokemons, sortedValue);
    createPokemonCards(sortedPokemons);
    $(".count").text(sortedPokemons.length);
  };

  const createPokemonCards = pokemons => {
    const $pokemonList = $(".pokemon-list");
    $pokemonList.empty();
    pokemons.forEach(pokemon => {
      const { name, id, sprites, types } = pokemon;
      const pokemonCardHtml = `
        <div class="card-container">
          <img class="pokemon-image" src="${sprites.front_default}"/>
          <p>${id}</p>
          <h3>${name}</h3>
          <ul>
            ${getPokemonTypes(types)}
          </ul>
        </div>`;
      $pokemonList.append(pokemonCardHtml);
    });
  };

  const getPokemonTypes = types => {
    return types.map(type => `<li>${type.type.name}</li>`).join("");
  };

  const filterPokemons = searchedValue => {
    if (searchedValue === "") {
      return pokemons;
    }
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().startsWith(searchedValue.toLowerCase())
    );
  };

  const sortPokemons = (pokemons, sort) => {
    if (sort.toLowerCase().includes("name")) {
      return pokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return pokemons.sort((a, b) => a.id - b.id);
    }
  };

  init();
});
