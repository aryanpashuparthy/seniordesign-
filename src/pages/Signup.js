import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "", 
    email: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5214/auth/register", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response)
      setResponseMessage(response.data.message || "Signup successful!");
      console.log("Signup response:", response.data);

      navigate("/login"); 
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error submitting form.";
      setResponseMessage(errorMessage);
      console.error("Error during signup:", errorMessage);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <p className="auth-description">
          In order to view the property details and financial breakdowns of investment opportunities, you need to create an account with us.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>First Name (Legal Name) *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Last Name (Legal Name)</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>+1 Mobile Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
        <div className="login-link">
          <p>
            Already have an account? <a href="/login">Log in now.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
