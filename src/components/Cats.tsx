import React, { useState } from 'react';
import axios from 'axios';

const CatApiRandomBreed = () => {
  const [randomBreed, setRandomBreed] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomBreed = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds = response.data;
      const randomIndex = Math.floor(Math.random() * breeds.length);
      const randomBreedData = breeds[randomIndex];
      setRandomBreed(randomBreedData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Random Cat Breed</h1>
      <button onClick={fetchRandomBreed}>Get Random Breed</button>
      {error && <div>Error: {error}</div>}
      {randomBreed && (
        <div>
          <h2>{randomBreed.name}</h2>
          <p>{randomBreed.description}</p>
        </div>
      )}
    </div>
  );
};

export default CatApiRandomBreed;
