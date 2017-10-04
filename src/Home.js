import React, { Component } from 'react';
import HeaderBar from './HeaderBar'

class Home extends Component {
  render() {
    return (
      <main>
        <HeaderBar title="Home"/>
        
        <section className="container mw-110 w-90 shadow card mv-24 p-16">
          <h2 className="heading-2">Welcome to a basic crappy web shop in react</h2>
        </section>
      </main>
    )
  }
};

export default Home;
