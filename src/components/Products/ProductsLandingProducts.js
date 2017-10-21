import React, { Component } from 'react';

import './ProductsLandingProducts.css';


class ProductsLandingProducts extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
    //bind shit here
  }

  render() {
    return (
      <section className="plpSection">
        <div className='plpContentWrapper'>
            <div className='plpSingleProductWrapper'>
                <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-kontrol-s61-mk2-a8e9cea694f7515584c420f7e28bec49-d.jpg" alt=""/>
                <h1>Title title title title</h1>
                <p>Content discription</p>
                <h3>$400.00</h3>
            </div>
            <div className='plpSingleProductWrapper'>
                <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-kontrol-s49-mk2-a954ee75e03ba18246e18bb89835762a-d.jpg" alt=""/>
                <h1>Title</h1>
                <p>Content discription</p>
                <h3>$400.00</h3>
            </div>
            <div className='plpSingleProductWrapper'>
                <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-11-5592c1d2395d1e4773a7be262d3597f8-d.jpg" alt=""/>
                <h1>Title</h1>
                <p>Content discription</p>
                <h3>$400.00</h3>
            </div>
            <div className='plpSingleProductWrapper'>
                <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-komplete-11-ultimate-dba3a2077e763914449b1b6bcafaa502-d.jpg" alt=""/>
                <h1>Title</h1>
                <p>Content discription</p>
                <h3>$400.00</h3>
            </div>
            <div className='plpSingleProductWrapper'>
                <img src="https://www.native-instruments.com/typo3temp/pics/img-packshot-nks_pf_2017_10-5895d35f7a46b2d7967502a0caaa93b3-d.jpg" alt=""/>
                <h1>Title</h1>
                <p>Content discription</p>
                <h3>$400.00</h3>
            </div>
        </div>
      </section>
    );
  }
}


export default ProductsLandingProducts;