import React from 'react';
import { useParams } from 'react-router-dom';
import houses from '../data/houses';
import "bootstrap/dist/css/bootstrap.min.css";
import './HouseDetail.css';

function HouseDetail() {
  const { id } = useParams();
  const house = houses.find(h => h.id === parseInt(id));

  const sharePrice = house.sharePrice/4312

  if (!house) {
    return <h2>House not found</h2>;
  }

  // Destructure images: first image as main, rest as thumbnails
  const [mainImage, ...thumbnailImages] = house.images;

  return (
    <div className="house-detail">
      {/* Top Section */}
      <div className="top-section">
        <div className="left-part">
          <img src={mainImage} alt={`${house.name} Main`} className="main-image" />
        </div>
        <div className="right-part">
          {thumbnailImages.slice(0, 4).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${house.name} Image ${index + 1}`}
              className="thumbnail-image"
            />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="left-part">
          <h2>{house.name}</h2>
          <p><strong>Rooms:</strong> {house.rooms}</p>
          <p><strong>Price:</strong> ${house.sharePrice.toLocaleString()}</p>
          <p><strong>Description:</strong> {house.description}</p>
        </div>

        {/* Right Part: Card, Amount, and Button */}
        <div className="right-part">
          <div className="price-card">
            <h3>Price</h3>
            <div className="amount-section ">
              <p>${house.sharePrice.toLocaleString()}</p>
              <span>${sharePrice.toFixed(2)}/share</span>
            </div>
            <button className="invest-button mb2">
              <a href="/credit-card" className="invest-link">Invest</a>
            </button>
             {/* Bottom Boxes */}
          <div className="bottom-boxes">
            <div className="box">{house.sharePrice.toLocaleString()}</div>
            <div className="box">{house.sharePrice.toLocaleString()}</div>
          </div>

          {/* Progress Bar */}
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress" style={{ width: '70%' }}></div>
            </div>
          </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default HouseDetail;
