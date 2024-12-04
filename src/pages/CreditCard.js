import React, { useState } from 'react';
import './CreditCard.css';

function CreditCardPage() {
  const [form, setForm] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    ssn: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., API call)
    console.log('Form Submitted:', form);
  };

  return (
    <div className="credit-card-page">
      <h2>Complete Your Purchase</h2>
      <form onSubmit={handleSubmit} className="credit-card-form">
        {/* Card Information */}
        <div className="form-section">
          <h3>Card Information</h3>
          <label>Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            required
          />
          <label>Cardholder's Name</label>
          <input
            type="text"
            name="cardHolder"
            value={form.cardHolder}
            onChange={handleChange}
            required
          />
          <label>Expiration Date</label>
          <input
            type="text"
            name="expiryDate"
            value={form.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
          <label>CVV</label>
          <input
            type="text"
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
            placeholder="123"
            required
          />
        </div>

        {/* Billing Information */}
        <div className="form-section">
          <h3>Billing Information</h3>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={form.zipCode}
            onChange={handleChange}
            required
          />
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            required
          />
        </div>

        {/* Personal Information */}
        <div className="form-section">
          <h3>Personal Information</h3>
          <label>SSN</label>
          <input
            type="text"
            name="ssn"
            value={form.ssn}
            onChange={handleChange}
            placeholder="123-45-6789"
            required
          />
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={form.dateOfBirth}
            onChange={handleChange}
            required
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Terms and Conditions */}
        <div className="form-section">
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={form.agreeToTerms}
              onChange={handleCheckboxChange}
              required
            />
            I agree to the Terms and Conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="form-section">
          <button type="submit" className="submit-button">Submit Payment</button>
        </div>
      </form>
    </div>
  );
}

export default CreditCardPage;
