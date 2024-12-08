import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-property">Add Property</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/gaming">Gaming</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/science-tech">Science & Tech</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/student-hubs">Student Hubs</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
