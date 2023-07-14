import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../componentes/Card/Card';
import { FaSpinner } from 'react-icons/fa';

const Detalle = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = "https://pokeapi.co/api/v2/pokemon";

  const getPokemon = async (name) => {
    setIsLoading(true);
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    const src = data.sprites.other.dream_world.front_default;
    const stats = data.stats.map((stat) => ({
      name: stat.stat.name,
      base: stat.base_stat,
    }));

    setPokemon({ name, stats, src });
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <div>
      {isLoading ? (
        <div className="text-center">
          <FaSpinner className="spin-icon" />
        </div>
      ) : (
        <PokemonCard pokemon={pokemon} />
      )}
    </div>
  );
};

export default Detalle;