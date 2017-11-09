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
    this.handleChange = this.handleChange.bind(this);
  }

  showBitmoji(){
    this.setState({
      showBitmoji: false
    })
  }

  handleChange(e){
    if(e.target.value === 'changeme'){
      this.setState({
        showCover:false
      })
    }
  }

  render() {

    let bitmoji = this.state.showBitmoji ? <Bitmoji showBitmoji={this.showBitmoji}/> : null
    let cover = this.state.showCover ?  <div className='fixedCover'>
                                          <input onChange={this.handleChange} type="text"/>
                                        </div> : null

    return (
      <div className="home">
          
          {cover}
          {bitmoji}
          <MainHeader/>
          <LandingVideo/>
          <LandingTeaserStories/>
          <LandingFeaturedProducts/>
          <LandingMoreStories/>
          <MainFooter/>}

      </div>
    );
  }
}


export default Home;