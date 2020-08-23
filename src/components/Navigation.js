import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="nav justify-content-center fixed-top">
      <li className="nav-item">
        <NavLink
          activeClassName="is-active"
          className="nav-link"
          to="/australia"
        >
          Australia
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="is-active"
          className="nav-link"
          to="/new-zealand"
        >
          New Zealand
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          activeClassName="is-active"
          className="nav-link"
          to="/united-kingdom"
        >
          U.K
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
