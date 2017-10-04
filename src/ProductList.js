import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: allTeslaCars
    }
  }
  render() {
    return (
      <main>
        <HeaderBar title="All products"/>
        <section className="container mw-110 w-90 shadow card mv-24 p-16">
          <h2 className="heading-3">Products list</h2>
          <div className="grid">
            {
              this.state.products.map(product => <Link className="mv-16 col-quarter bg-gray-2 card" key={product.id} to={'/products/'+product.id}>
                <img src={product.imageSrc} alt=""/>
                <h3 className="headline p-8">{product.name}</h3>
              </Link>)
            }
          </div>
        </section>
      </main>
    );
  }
} 

export default ProductList;
