import React, { useState } from 'react';
import './Header.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
import HomePage from './HomePage';

const Header = () => {
  return (
    <>
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>


    </>
  );
};

export default Header;
