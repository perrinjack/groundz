import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav justify-content-center fixed-top">
      <li className="nav-item">
        <NavLink to="/australia">Australia</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/australia">New Zealand</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/australia">U.K</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
