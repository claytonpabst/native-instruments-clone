import React, { Component } from 'react';
import MainHeader from './../Headers/MainHeader.js';
import ProductsFilterHeader from './ProductsFilterHeader.js';


class ProductsLanding extends Component {

  render() {
    return (
      <div className="home">

          <MainHeader/>
          <ProductsFilterHeader/>

      </div>
    );
  }
}


export default ProductsLanding;