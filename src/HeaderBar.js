import React, { Component } from 'react';
import Navigation from './Navigation';

const HeaderBar = (props) => (
  <header className="bg-blue-9 shadow">
    <section className="container mw-110 flex jc-sb ai-center h-64">
      <h1 className="heading-4 white">{props.title}</h1>
      <Navigation/>
    </section>
  </header>
);    

export default HeaderBar;
