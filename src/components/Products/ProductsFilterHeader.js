import React, { Component } from 'react';

import './ProductsFilterHeader.css';


class ProductsFilterHeader extends Component {

  render() {
    return (
      <section className="pfhSection">
        <div className='pfhContentWrapper'>
            <ul style={{"flex-wrap":"wrap"}} className='flexRow'>
                <li>All</li>
                <li>Free</li>
                <li>Bundles</li>
                <li>Keyboards</li>
                <li>Synths</li>
                <li>Samplers</li>
                <li>Effects</li>
                <li>Drums</li>
                <li>Keys</li>
                <li>Guitars</li>
                <li>Strings</li>
                <li>Brass/Woodwinds</li>
                <li>Cinematic</li>
                <li>World</li>
                <li>Audio Interfaces</li>
            </ul>
        </div>
      </section>
    );
  }
}


export default ProductsFilterHeader;