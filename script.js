import { pokemonArray } from './data/pokemon.js';
//select main container
const mainDisplay = document.querySelector('.card-container');

const toProper = (string) => {
  return string[0].toUpperCase() + string.substring(1);
};

const generateImage = (pokemon) => {
  return `<img src="${pokemon.sprite}" alt="${toProper(
    pokemon.name
  )}" class="card__image"/>`;
};
const generateCardContent = (pokemon) => {
  const heading = `<h2 class="card__heading">${toProper(pokemon.name)}</h2>`;
  let typeDescr = pokemon.types.join(' & ');
  const text = `<p class="card__text">${toProper(pokemon.name)} (#${
    pokemon.id
  }) is a ${typeDescr} type pokemon.</p>`;
  return `<div class="card__content">${heading} ${text}</div>`;
};

pokemonArray.forEach((pokemon) => {
  console.log(pokemon.name);
  const card = `<div class="card">${generateImage(
    pokemon
  )} ${generateCardContent(pokemon)}</div>`;
  mainDisplay.innerHTML += card;
});
