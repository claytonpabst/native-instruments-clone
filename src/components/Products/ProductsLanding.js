import React, { Component } from 'react';
import MainHeader from './../Headers/MainHeader.js';
import ProductsFilterHeader from './ProductsFilterHeader.js';
import ProductsLandingProducts from './ProductsLandingProducts.js';


class ProductsLanding extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
    //bind shit here
  }

  render() {
    return (
      <div className="home">

          <MainHeader/>
          <ProductsFilterHeader/>
          <ProductsLandingProducts/>

      </div>
    );
  }
}


export default ProductsLanding;