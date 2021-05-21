const pokeCardTemplate = `
<style>
* {
  font-family: acumin-pro-extra-condensed, sans-serif;
  font-weight: 700;
  font-style: italic;
}
h3 {
  display: flex;
  align-self: flex-start;
  justify-self: flex-end;
  font-size: 24px;
  color: black;
  text-transform: uppercase;
  margin: 8px;
}
h4 {
  font-size: 18px;
  color: white;
  margin: 8px;
  padding: 0;
  line-height: 22px;
}
.poke-card-style {
  width: 144px;
  height: 204px;
  background: linear-gradient(
    180deg,
    #f6bd20 0%,
    #ffffff 55.73%,
    #ffde52 100%
  );
  border: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.type {
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-self: flex-start;
  align-self: flex-start;
  min-width: 33px;
  min-height: 34px;
  background-color: white;
  border-radius: 10px 0px 100px;
}

.icons {
  display: flex;
}

.icons img {
  width: 16px;
  height: 16px;
}
.card-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.card-bottom {
  width: 100%;
}
.image {
  width: 95px;
  height: 95px;
}
</style>

<div class="poke-card-style">
<div class="card-top">
  <div id="element" class="type">
    <div class="icons">
      <img src="./components/poke-card/assets/img/icon-zap.png" alt="" />
    </div>
  </div>
  <h4 id="pokemonNumber">#333</h4>
</div>

<img
  id="image"
  class="image"
  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
  alt=""
/>
<div class="card-bottom">
  <h3 id="name">Pikachu</h3>
</div>
</div>
    `;

const tipos = {
  normal: {
    fondo: "linear-gradient(180deg, #E5E5E5 0%, #FFFFFF 100%);",
    icon: "./img/icons/icon-normal.png",
  },
  fighting: {
    fondo: "linear-gradient(180deg, #FD9898 0%, #FFFFFF 100%);",
    icon: "./img/icons/icon-fighting.png",
  },
  flying: {
    fondo: "linear-gradient(180deg, #FFFFFF 0%, #B3C8EA 100%);",
    icon: "./img/icons/icon-flying.png",
  },
  poison: {
    fondo: "linear-gradient(180deg, #34B550 0%, #2A7318 100%);",
    icon: "./img/icons/icon-poison.png",
  },
  ground: {
    fondo: "linear-gradient(180deg, #D6C28B 0%, #675628 100%);",
    icon: "./img/icons/icon-ground.png",
  },
  rock: {
    fondo: "linear-gradient(180deg, #D3D3D3 0%, #746D5A 100%);",
    icon: "./img/icons/icon-rock.png",
  },
  bug: {
    fondo: "linear-gradient(180deg, #34B550 0%, #BEFFAD 100%);",
    icon: "./img/icons/icon-bug.png",
  },
  ghost: {
    fondo: "linear-gradient(180deg, #FFFFFF 0%, #D8A7E9 100%);",
    icon: "./img/icons/icon-ghost.png",
  },
  steel: {
    fondo: "linear-gradient(180deg, #C4C4C4 0%, #C1CCDD 100%);",
    icon: "./img/icons/icon-steel.png",
  },
  fire: {
    fondo: "linear-gradient(180deg, #CF2828 0%, #FFDE52 100%);",
    icon: "./img/icons/icon-fire.png",
  },
  water: {
    fondo: "linear-gradient(180deg, #3CC7DA 0%, #186B85 100%);",
    icon: "./img/icons/icon-water.png",
  },
  grass: {
    fondo: "linear-gradient(180deg, #9EDA3C 0%, #6F976E 100%);",
    icon: "./img/icons/icon-grass.png",
  },
  electric: {
    fondo: "linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%);",
    icon: "./img/icons/icon-zap.png",
  },
  psychic: {
    fondo: "linear-gradient(180deg, #3A7DE2 0%, #D8A7E9 100%)",
    icon: "./img/icons/icon-psychic.png",
  },
  ice: {
    fondo: "linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%);",
    icon: "./img/icons/icon-ice.png",
  },
  dragon: {
    fondo:
      "linear-gradient(180deg, #9EDA3C 0%, #D6C28B 0.01%, #FFCB05 52.08%, #CA3030 100%);",
    icon: "./img/icons/icon-dragon.png",
  },
  dark: {
    fondo: "linear-gradient(180deg, #518894 0.01%, #575756 100%);",
    icon: "./img/icons/icon-dark.png",
  },
  fairy: {
    fondo:
      "linear-gradient(180deg, #FF00C7 0.01%, #00FF75 49.48%, #0AC2C2 100%);",
    icon: "./img/icons/icon-fairy.png",
  },
};

class PokeCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = pokeCardTemplate;
  }

  get pokemonName() {
    return this.shadowRoot.querySelector("#name").innerHTML;
  }

  set pokemonName(newPokemonName) {
    this.shadowRoot.querySelector("#name").innerHTML = newPokemonName;
  }

  get pokemonElement() {
    return (
      this.shadowRoot.querySelector(".icons img").innerHTML,
      this.shadowRoot.querySelector(".poke-card-style").style.background
    );
  }

  set pokemonElement(newPokemonElement) {
    const newTypeIcon = this.cardIconChanger(newPokemonElement);
    const newBackColor = this.cardColorChanger(newPokemonElement);
    this.shadowRoot.querySelector(".icons img").src = newTypeIcon;
    this.shadowRoot.querySelector(".poke-card-style");

    console.log(this.shadowRoot.querySelector(".poke-card-style").style);
  }

  // Funcion para cambiar el color de la card segun el tipo de pokemon
  cardColorChanger(pokemonType) {
    let pokeType = pokemonType.toLowerCase();
    console.log(pokeType);
    return tipos[pokeType].fondo;
  }

  cardIconChanger(pokemonType) {
    let pokeType = pokemonType.toLowerCase();
    return tipos[pokeType].icon;
  }

  connectedCallback() {
    this.pokemonName = this.getAttribute("pokemonName");
    /* this.pokemonImage = this.getAttribute("pokemonImg"); */
    this.pokemonElement = this.getAttribute("pokemonElement");
  }
}

window.customElements.define("poke-card", PokeCard);
