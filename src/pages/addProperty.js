import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import HouseCard from '../components/HouseCard';
import { useNavigate } from "react-router-dom";

const PropertyForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // propertyName: "",
    // description: "",
    address: "",
    location: "",
    propertyValue: "",
    sharePrice: "",
    availableShares: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [responseId, setResponse] = useState("")

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5214/api/property/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setResponse(response.data.propertyId)
      setResponseMessage(response.data.message || "Data submitted successfully!");

      console.log(response)
      console.log(response.data)

      navigate(`/`)
    } catch (error) {
      setResponseMessage(error.response?.data || "Error submitting data.");
      console.log(responseMessage);
    }
  };

  return (
    <div className="container mt-5 w-50">
      <h2 className="mb-4">Property Details Form</h2>

      <form onSubmit={handleSubmit} >
        <div className="mb-3 ">
          <label htmlFor="propertyName" className="form-label text-black">
            Property Name
          </label>
          <input
            type="text"
            className="form-control"
            id="propertyName"
            placeholder="Enter property name"
            // value={formData.propertyName}
            value= "property 1"
            // onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="propertyValue" className="form-label text-black">
            Property Value
          </label>
          <input
            type="number"
            className="form-control"
            id="propertyValue"
            placeholder="Enter property value"
            value={formData.propertyValue}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label text-black">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Enter property description"
            // value={formData.description}
            value= "need to add description"
            // onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label text-black">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label text-black">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="sharePrice" className="form-label text-black">
            Share Price
          </label>
          <input
            type="number"
            className="form-control"
            id="sharePrice"
            placeholder="Enter share price"
            value={formData.sharePrice}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="availableShares" className="form-label text-black">
            Available Shares
          </label>
          <input
            type="number"
            className="form-control"
            id="availableShares"
            placeholder="Enter available shares"
            value={formData.availableShares}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {responseMessage && <p className="mt-3">{responseMessage}</p>}
      </form>

      {/* <HouseCard responseId={responseId} responseMessage={responseMessage} /> */}

      {responseId && responseMessage && (
      <HouseCard responseId={responseId} responseMessage={responseMessage} />
    )}


    </div>
  );
};

export default PropertyForm;
