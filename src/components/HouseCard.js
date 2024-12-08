import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HouseCard.css";
import axios from "axios";

import houses from "../data/houses";

function HouseCard({ responseId, responseMessage }) {
  const [getHouse, setHouse] = useState([...houses]);
  const navigate = useNavigate();

  const fetchProperty = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5214/api/property/search/id/${responseId}`,
        {
          withCredentials: true,
          headers: { Accept: "*/*" },
        }
      );
      const fetchedHouse = response.data;
      console.log(fetchedHouse)

      setHouse((prevHouses) => {
        const updatedHouses = [...prevHouses, fetchedHouse];
        console.log("Updated Houses in setState callback:", updatedHouses)})

      console.log("Updated House Data:", getHouse);
    } catch (err) {
      console.error("Error fetching property data:", err.message);
    }
  };

  useEffect(() => {
    if (responseId) {
      fetchProperty();
    }
  }, [responseId]);

  const handleClick = (id) => {
    navigate(`/house/${id}`);
  };

  return (
    <div className="home">
      <h2>Easily Invest in Real Estate</h2>
      <p className="mb2"></p>
      <div className="house-list">
        {getHouse.map((house, index) => (
          <div
            key={index}
            className="house-card"
            onClick={() => handleClick(house.id)}
          >
            <img
              src={house?.images?.[0] || "default-image.jpg"} 
              alt={house?.name || "Default House"}
              className="house-image"
            />
            <div className="house-info">
              <h3>{house?.name || "Default Name"}</h3>
              <p>{house?.rooms || 0} Rooms</p>
              <p>${house?.sharePrice?.toLocaleString() || "0"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HouseCard;
