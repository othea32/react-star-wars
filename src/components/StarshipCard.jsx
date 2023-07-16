import React from 'react';

function StarshipCard({ name }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default StarshipCard;