import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Product from './Product';
import ProductList from './ProductList';
import Cart from './Cart';
import Home from './Home';
import EventBus from 'eventing-bus';
import Notyf from 'notyf';
import 'notyf/dist/notyf.min.css';


var notyf = new Notyf();


class WebShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: []
    }
    EventBus.on("addToCart", (product) => {
      let productAlreadyAdded = this.state.cartProducts.findIndex(item => item.id == product.id);
      if (productAlreadyAdded < 0) {
        product.count = 1;
        this.state.cartProducts.push(product);
        this.setState({cartProducts: this.state.cartProducts});
        notyf.confirm(product.name+' added to your kart.');
      } else {
        this.state.cartProducts[productAlreadyAdded].count++;
        this.setState({cartProducts: this.state.cartProducts});
        notyf.confirm(product.name + ' quantity increased');
      }
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/products/:id"   component={Product} />
          <Route path="/products"       component={ProductList} />
          <Route path="/cart"           render={props => {
            return(
              <Cart cartProducts={this.state.cartProducts}/>
            )}}
          />
          <Route path="/"               component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }

}

export default WebShop;
