import React, { useState } from 'react';
import './Auth.css';

function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    mobilePhone: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup form submitted:', form);
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
              name="mobilePhone"
              value={form.mobilePhone}
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

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="login-link">
          <p>Already have an account? <a href="/login">Log in now.</a></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
