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
        <div className='bitmojiImage'>
          <img src="https://scontent.fslc1-1.fna.fbcdn.net/v/t1.0-9/22851711_829758373862462_3566424655210538394_n.jpg?oh=522fe6cdcc2573580e3259d0fa82ae11&oe=5A6BFC64" alt=""/>
        </div>
        <div className='bitmojiText'>
          <p> &#160;&#160;&#160;&#160;Hi! I'm Clayton Pabst, welcome to my clone of Native Instruments.
              Try out functionality by logging in as a user. <br/>username: user <br/>password: user
              <br/><br/>&#160;&#160;&#160;&#160;Or log in as an admin and try out managing products in the mini CMS. <br/>
              username: admin <br/> password: admin
          </p>
        </div>
      </div>
    );
  }
}


export default Bitmoji;