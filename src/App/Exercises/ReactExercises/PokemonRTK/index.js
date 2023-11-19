import { useState } from 'react';
import { useGetPokemonByNameQuery } from '../../../../services/pokemon';

export const Excercise = () => {
  const [inputValue, setInputValue] = useState('bulbasaur');

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <div>
      <h2>Ćwiczenie związane z Redux RTK pobieranie z pokemona</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </div>
  );
};
