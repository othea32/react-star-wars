import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const starshipsData = await getAllStarships();
        setStarships(starshipsData);
      } catch (error) {
        console.error('Error fetching starships:', error);
      }
    }

    fetchStarships();
  }, []);

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <div className="card-container">
        {starships.map(starship => (
          <StarshipCard key={starship.name} name={starship.name} />
        ))}
      </div>
    </div>
  );
}

export default App;
