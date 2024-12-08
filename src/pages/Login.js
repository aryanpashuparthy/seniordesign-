import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import './Auth.css';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5214/auth/login", form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response)
      setResponseMessage(response.data.message || "Signup successful!");
      console.log("Signup response:", response.data);

      navigate("/"); 
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error submitting form.";
      setResponseMessage(errorMessage);
      console.error("Error during signup:", errorMessage);
    }
    // Handle login logic here
    console.log('Login form submitted:', form);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <p className="auth-description">
          Please enter your credentials to access your account.
        </p>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="forgot-password">
          <p><a href="/forgot-password">Forgot your password?</a></p>
        </div>

        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up now.</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
