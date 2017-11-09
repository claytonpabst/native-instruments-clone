import React, { Component } from 'react';
import MainHeader from './../Headers/MainHeader.js';
import LandingVideo from './../LandingVideo/LandingVideo.js';
import LandingTeaserStories from './../Landing/LandingTeaserStories.js';
import LandingFeaturedProducts from './../Landing/LandingFeaturedProducts.js';
import LandingMoreStories from './../Landing/LandingMoreStories.js';
import MainFooter from './../Footers/MainFooter.js';
import Bitmoji from './Bitmoji.js';

import './Home.css';


class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      showBitmoji: true,
      showCover: true
    }
    //bind shit here
    this.showBitmoji = this.showBitmoji.bind(this);
  }

  showBitmoji(){
    this.setState({
      showBitmoji: false
    })
  }

  render() {

    let bitmoji = this.state.showBitmoji ? <Bitmoji showBitmoji={this.showBitmoji}/> : null

    return (
      <div className="home">
          
          <div className='fixedCover'>
            <input type="text"/>
          </div>
          {bitmoji}
          <MainHeader/>
          <LandingVideo/>
          <LandingTeaserStories/>
          <LandingFeaturedProducts/>
          <LandingMoreStories/>
          <MainFooter/>

      </div>
    );
  }
}


export default Home;