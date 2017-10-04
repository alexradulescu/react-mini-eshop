import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const Navigation  = () => (
  <nav className="">
    <Link to="/" className="button-transparent material-icons white button-icon">home</Link>
    <Link to="/products" className="button-transparent material-icons white button-icon">local_mall</Link>
    <Link to="/cart" className="button-transparent material-icons white button-icon">shopping_cart</Link>
  </nav>
);

export default Navigation;
