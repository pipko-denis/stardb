import React from 'react';
import ReactDOM from 'react-dom';
import './header.css';

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">StarDB</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a class="nav-link" href="#">Peoples</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">Planets</a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">Starships</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;