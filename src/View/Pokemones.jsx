import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState("");    
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon";
  const limit = 20; // Cantidad de resultados por página
  const [offset, setOffset] = useState(0); // Valor inicial del offset

  const getPokemon = async () => {
    const res = await fetch(`${url}?offset=${offset}&limit=${limit}`);
    const data = await res.json();
    setPokemones(data.results);
  };

  const goToPokemonDetail = () => {
    if (pokemonSelected) {
      navigate(`/pokemones/${pokemonSelected}`);
    } else {
      alert("Debes seleccionar un pokemon");
    }
  };

  const handleNextPage = () => {
    setOffset(offset + limit); // Aumentar el valor del offset para la siguiente página
  };

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - limit); // Disminuir el valor del offset para la página anterior
    }
  };

  useEffect(() => {
    getPokemon();
  }, [offset]);

  const rangeStart = offset + 1;
  const rangeEnd = offset + pokemones.length;

  return (
    <div className='mt-5 text-center'>
      <h1>Selecciona un pokemon</h1>
      <div className='d-flex justify-content-center align-items-center'>
        <select 
          value={pokemonSelected}
          className='form-select text-center'
          style={{ width: 150, backgroundColor: 'gray', color: 'white' }}
          onChange={({ target }) => setPokemonSelected(target.value)}
        >
          <option value="" disabled style={{ color: 'gray' }}>Pokemon</option>
          {pokemones.map(({ name }, index) => (
            <option key={index} value={name} style={{ color: 'white' }}>{name}</option>
          ))}
        </select>
        <button
          className='btn btn-primary'
          style={{ backgroundColor: 'darkred', borderColor: 'black', marginLeft: '10px' }}
          onClick={goToPokemonDetail}
        >
          Ver detalles
        </button>
      </div>
      <br />
      <div className="pagination d-flex justify-content-center align-items-center">
        <button onClick={handlePrevPage} disabled={offset === 0}>Anterior</button>
        <span>{`${rangeStart}-${rangeEnd}`}</span>
        <button onClick={handleNextPage}>Siguiente</button>
      </div>
    </div>
  );
};

export default Pokemones;