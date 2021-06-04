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

.bg-normal {
  background: linear-gradient(180deg, #E5E5E5 0%, #FFFFFF 100%);
}
.bg-fighting {
  background: linear-gradient(180deg, #FD9898 0%, #FFFFFF 100%);
}
.bg-flying {
  background: linear-gradient(180deg, #FFFFFF 0%, #B3C8EA 100%);
}
.bg-poison {
  background: linear-gradient(180deg, #34B550 0%, #2A7318 100%);
}
.bg-ground {
  background: linear-gradient(180deg, #D6C28B 0%, #675628 100%);
}
.bg-rock {
  background: linear-gradient(180deg, #D3D3D3 0%, #746D5A 100%);
}
.bg-bug {
  background: linear-gradient(180deg, #34B550 0%, #BEFFAD 100%);
}
.bg-ghost {
  background: linear-gradient(180deg, #FFFFFF 0%, #D8A7E9 100%);
}
.bg-steel {
  background: linear-gradient(180deg, #C4C4C4 0%, #C1CCDD 100%);
}
.bg-fire {
  background: linear-gradient(180deg, #CF2828 0%, #FFDE52 100%);
}
.bg-water {
  background: linear-gradient(180deg, #3CC7DA 0%, #186B85 100%);
}
.bg-grass {
  background: linear-gradient(180deg, #9EDA3C 0%, #6F976E 100%);
}
.bg-electric {
  background: linear-gradient(180deg, #F6BD20 0%, #FFFFFF 55.73%, #FFDE52 100%);
}
.bg-psychic {
  background: linear-gradient(180deg, #3A7DE2 0%, #D8A7E9 100%);
}
.bg-ice {
  background: linear-gradient(180deg, #FFFFFF 0%, #C5DBFF 55.73%, #E2E9F5 100%);
}
.bg-dragon {
  background: linear-gradient(180deg, #9EDA3C 0%, #D6C28B 0.01%, #FFCB05 52.08%, #CA3030 100%);
}
.bg-dark {
  background: linear-gradient(180deg, #518894 0.01%, #575756 100%);
}
.bg-fairy {
  background: linear-gradient(180deg, #FF00C7 0.01%, #00FF75 49.48%, #0AC2C2 100%);
}
</style>

<div class="poke-card-style">
<div class="card-top">
  <div id="element" class="type">
    <div class="icons">
      <img src="" alt="" />
    </div>
  </div>
  <h4 id="pokemonNumber"></h4>
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
    fondo: "bg-normal",
    icon: "./img/icons/icon-normal.png",
  },
  fighting: {
    fondo: "bg-fighting",
    icon: "./img/icons/icon-fighting.png",
  },
  flying: {
    fondo: "bg-flying",
    icon: "./img/icons/icon-flying.png",
  },
  poison: {
    fondo: "bg-poison",
    icon: "./img/icons/icon-poison.png",
  },
  ground: {
    fondo: "bg-ground",
    icon: "./img/icons/icon-ground.png",
  },
  rock: {
    fondo: "bg-rock",
    icon: "./img/icons/icon-rock.png",
  },
  bug: {
    fondo: "bg-bug",
    icon: "./img/icons/icon-bug.png",
  },
  ghost: {
    fondo: "bg-ghost",
    icon: "./img/icons/icon-ghost.png",
  },
  steel: {
    fondo: "bg-steel",
    icon: "./img/icons/icon-steel.png",
  },
  fire: {
    fondo: "bg-fire",
    icon: "./img/icons/icon-fire.png",
  },
  water: {
    fondo: "bg-water",
    icon: "./img/icons/icon-water.png",
  },
  grass: {
    fondo: "bg-grass",
    icon: "./img/icons/icon-grass.png",
  },
  electric: {
    fondo: "bg-electric",
    icon: "./img/icons/icon-zap.png",
  },
  psychic: {
    fondo: "bg-psychic",
    icon: "./img/icons/icon-psychic.png",
  },
  ice: {
    fondo: "bg-ice",
    icon: "./img/icons/icon-ice.png",
  },
  dragon: {
    fondo: "bg-dragon",
    icon: "./img/icons/icon-dragon.png",
  },
  dark: {
    fondo: "bg-dark",
    icon: "./img/icons/icon-dark.png",
  },
  fairy: {
    fondo: "bg-fairy",
    icon: "./img/icons/icon-fairy.png",
  },
};

class PokeCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = pokeCardTemplate;
  }

  get pokemonNumber() {
    return this.shadowRoot.querySelector("#pokemonNumber").innerHTML;
  }

  set pokemonNumber(newPokemonNumber) {
    this.shadowRoot.querySelector("#pokemonNumber").innerHTML =
      newPokemonNumber;
  }

  get pokemonImage() {
    return this.shadowRoot.querySelector("#image").src;
  }

  set pokemonImage(newPokemonImage) {
    this.shadowRoot
      .querySelector("#image")
      .setAttribute("src", newPokemonImage);
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
    this.shadowRoot
      .querySelector(".poke-card-style")
      .classList.add(newBackColor);
  }

  // Funcion para cambiar el color de la card segun el tipo de pokemon
  cardColorChanger(pokemonType) {
    let pokeType = pokemonType.toLowerCase();
    return tipos[pokeType].fondo;
  }

  cardIconChanger(pokemonType) {
    let pokeType = pokemonType.toLowerCase();
    return tipos[pokeType].icon;
  }

  connectedCallback() {
    this.pokemonName = this.getAttribute("pokemonName");
    this.pokemonNumber = this.getAttribute("pokemonNumber");
    this.pokemonImage = this.getAttribute("pokemonImg");
    this.pokemonElement = this.getAttribute("pokemonElement");
  }
}

window.customElements.define("poke-card", PokeCard);
