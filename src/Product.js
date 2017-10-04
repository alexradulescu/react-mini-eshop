import React, { Component } from 'react';
import EventBus from 'eventing-bus';
import HeaderBar from './HeaderBar';

var allTeslaCars = [
  {
    id: 1,
    name: 'Tesla Model S',
    price: 60000,
    imageSrc: 'https://www.tesla.com/tesla_theme/assets/img/models/v1.0/slideshow/Red_Bay-1440.jpg?20170907'
  },
  {
    id: 2,
    name: 'Tesla Model 3',
    price: 35000,
    imageSrc: 'https://www.tesla.com/sites/default/files/images/model-3/social-m3-meta.jpg'
  },
  {
    id: 3,
    name: 'Tesla Model X',
    price: 80000,
    imageSrc: 'https://www.tesla.com/sites/default/files/images/model-x/section-hero-background.jpg?20170907'
  },
  {
    id: 4,
    name: 'Tesla Model Y',
    price: 50000,
    imageSrc: 'https://electrek.files.wordpress.com/2017/03/tesla-model-y.png?w=1169&h=583'
  },
];

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: allTeslaCars.find(item => item.id == props.match.params.id)
    }
  }
  render() {
    return (
      <main>
        <HeaderBar title={this.state.product.name}/>
        
        <section className="container mw-110 w-90 shadow card mv-24 p-16">
            <img src={this.state.product.imageSrc} alt=""/>
            <h2 className="heading-3 mv-16">{this.state.product.name}</h2>
            <p className="heading-6 mv-8">Price: {this.state.product.price} </p>
            <button className="button mv-16" onClick={this.addToCart}>Add to cart</button>
        </section>
      </main>
    );
  }

  addToCart = () => {
    EventBus.publish("addToCart", this.state.product);
  }
};

export default Product;
