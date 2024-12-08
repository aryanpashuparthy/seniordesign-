import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css";
import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ location: "" }); 
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:5214/api/property/search/location/${formData.location}`, // Use formData.location for the API call
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponseMessage(response.data.message || "Data submitted successfully!");
      console.log(response);
      console.log(response.data);

      navigate(`/`);
    } catch (error) {
      setResponseMessage(error.response?.data || "Error submitting data.");
      console.error("Error:", error);
    }
  };

  return (
    <nav className="Navbar navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white" to="/">
          🏠 WiseShare
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Centered Search Bar */}
          <form className="d-flex mx-auto align-top pt-2" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search houses..."
              aria-label="Search"
              name="location" 
              value={formData.location}
              onChange={handleChange}
            />
            <button className="btn h-75 btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Right-side Elements */}
          <ul className="navbar-nav ms-auto">
            {/* Help Icon */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="#">
                ?
              </Link>
            </li>

            {/* User Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🙎🏼
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/signup">
                    Signup
                  </Link>
                </li>
              </ul>
            </li>

            {/* Language Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🌐 English
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                <li>
                  <Link className="dropdown-item" to="#">
                    English
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Spanish
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    French
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
