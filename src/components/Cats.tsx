import React, { useState } from 'react';
import axios, { AxiosError } from 'axios'; // Import AxiosError type

const CatApiRandomBreed = () => {
  const [randomBreed, setRandomBreed] = useState<any>(null); // Specify type as any for initial state
  const [error, setError] = useState<string | null>(null); // Specify type as string or null for error

  const fetchRandomBreed = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds = response.data;
      const randomIndex = Math.floor(Math.random() * breeds.length);
      const randomBreedData = breeds[randomIndex];
      setRandomBreed(randomBreedData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred'); // Fallback error message
      }
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
