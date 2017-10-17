import React, { Component } from 'react';
import MainHeader from './../Headers/MainHeader.js';
import LandingVideo from './../LandingVideo/LandingVideo.js';

import './Home.css';


class Home extends Component {

  render() {
    return (
      <div className="home">

          <MainHeader/>
          <LandingVideo/>

      </div>
    );
  }
}


export default Home;