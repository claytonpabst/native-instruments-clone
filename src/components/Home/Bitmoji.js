import React, { Component } from 'react';

import './Bitmoji.css';


class Bitmoji extends Component {
  constructor(props){
    super(props)

    this.state = {
    }
    //bind shit here
  }

  render() {
    return (
      <div className="bitmojiSection">
        <div className='bitmojiX' onClick={this.props.showBitmoji}>X</div>
        <div className='bitmojiImage'>
          <img src="https://scontent.fslc1-1.fna.fbcdn.net/v/t1.0-9/22851711_829758373862462_3566424655210538394_n.jpg?oh=522fe6cdcc2573580e3259d0fa82ae11&oe=5A6BFC64" alt=""/>
        </div>
        <div className='bitmojiText'>
          <p> &#160;&#160;&#160;&#160;Hi! I'm Clayton Pabst, welcome to my clone of Native Instruments.
              Try out the cart functionality by logging in as a user. <br/><br/>username: user <br/>password: user
              <br/><br/>&#160;&#160;&#160;&#160;Or, log in as an admin and try out managing products through the custom CMS. <br/><br/>
              username: admin <br/>password: admin
              <br/><br/>&#160;&#160;&#160;&#160;4 minute video walkthrough for this project:<br/>
              <a target='_blank' href="https://youtu.be/I3Dfwz1Xzt8">Video</a>
          </p>
        </div>
      </div>
    );
  }
}


export default Bitmoji;