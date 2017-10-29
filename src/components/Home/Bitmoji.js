import React, { Component } from 'react';

import './Bitmoji.css';


class Bitmoji extends Component {
  constructor(props){
    super(props)

    this.state = {
      showBitmoji: true
    }
    //bind shit here
  }

  render() {
    return (
      <div className="bitmojiSection">

      </div>
    );
  }
}


export default Bitmoji;