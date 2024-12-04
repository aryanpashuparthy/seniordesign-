import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HouseCard.css';

function HouseCard({ house }) {
  const navigate = useNavigate();

  console.log(house);
  

  const handleClick = () => {
    navigate(`/house/${house.id}`);
  };

  return (
    <div className="house-card" onClick={handleClick}>
      <img src={house.images[0]} alt={house.name} className="house-image" />
      <div className="house-info">
        <h3>{house.name}</h3>
        <p>{house.rooms} Rooms</p>
        <p>${house.price.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default HouseCard;
