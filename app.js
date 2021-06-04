for (let i = 0; i < 6; i++) {
  loading();

  fetch("https://app.pokemon-api.xyz/pokemon/random", {
    headers: {
      "content-type": "application/json",
    },
  })
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      createPokemonCard(json);
    });
}

function createPokemonCard(pokemonObj) {
  const newCard = document.createElement("poke-card");
  const container = document.querySelector(".contenedor");

  newCard.setAttribute("pokemonName", pokemonObj.name.english);
  newCard.setAttribute("pokemonElement", pokemonObj.type[0]);
  newCard.setAttribute("pokemonNumber", `#${pokemonObj.id}`);
  newCard.setAttribute("pokemonImg", `${pokemonObj.thumbnail}`);

  container.appendChild(newCard);
}

function loading() {
  document.querySelector(".contenedor").classList.add("oculto");
  setTimeout(() => {
    document.querySelector(".contenedor").classList.remove("oculto");
    document.querySelector("#loading").classList.add("oculto");
  }, 2000);
}
