import PokeImage from '../assets/img/pokepoke.png';
import React from 'react';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center">Bienvenido Maestro Pokemon</h1>
      <img height={300} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png"  alt="POKEEEr" />
    </div>
  );
};

export default Home;