import React from 'react';
import HouseCard from '../components/HouseCard';
import houses from '../data/houses';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Easily Invest in real estate</h2>
      <p className='mb2'></p>
      <div className="house-list">
        {houses.map(house => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}

export default Home;
