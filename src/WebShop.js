import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import EventBus from 'eventing-bus'

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

const Navigation  = () => (
  <nav className="">
    <Link to="/" className="button-transparent material-icons white button-icon">home</Link>
    <Link to="/products" className="button-transparent material-icons white button-icon">local_mall</Link>
    <Link to="/cart" className="button-transparent material-icons white button-icon">shopping_cart</Link>
  </nav>
);

const HeaderBar = (props) => (
  <header className="bg-blue-9 shadow">
    <section className="container mw-110 flex jc-sb ai-center h-64">
      <h1 className="heading-4 white">{props.title}</h1>
      <Navigation/>
    </section>
  </header>
);    

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

class Product extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      product: allTeslaCars.find(item => item.id == props.match.params.id)
    }
  }
  render() {
    return (
      <main>
        <HeaderBar title={this.state.product.name}/>
        
        <section className="container mw-110 w-90 shadow card mv-24 p-16">
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
            {
              this.state.products.map(product => <Link className="heading-4 block mv-16" key={product.id} to={'/products/'+product.id}>{product.name}</Link>)
            }
        </section>
      </main>
    );
  }
} 

class Cart extends Component{
  render() {
    return (
      <main>
        <HeaderBar title="Cart"/>
        
        <section className="container mw-110 w-90 shadow card mv-24 p-16">
          <h2 className="heading-3">Your shopping cart</h2>
          {
            this.props.cartProducts.map(product => 
              <p className="heading-4 mv-16" key={product.id}>{product.name}</p>
            )
          }
        </section>
      </main>
    );
  }
}  

class WebShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: []
    }
    EventBus.on("addToCart", (product) => {
      let productAlreadyAdded = this.state.cartProducts.find(item => item.id == product.id);
      if (!productAlreadyAdded) {
        this.state.cartProducts.push(product);
        this.setState({cartProducts: this.state.cartProducts});
        console.log(product.name + ' added to the cart');
      } else {
        console.log(product.name + ' already in the cart');
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
