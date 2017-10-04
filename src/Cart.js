import React, { Component } from 'react';
import HeaderBar from './HeaderBar';


class Cart extends Component{
  render() {
    return (
      <main>
        <HeaderBar title="Cart"/>
        
        <section className="container mw-110 w-90 shadow card mv-24 p-16">
          <h2 className="heading-3">Your shopping cart</h2>
          {
            this.props.cartProducts.map(product => 
              <p className="heading-4 mv-16" key={product.id}>{product.name} --> {product.count}</p>
            )
          }
        </section>
      </main>
    );
  }
}  

export default Cart;
