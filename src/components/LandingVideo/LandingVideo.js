import React from 'react';
import './LandingVideo.css';

export default function LandingVideo(){


    return(
        <section className='landingVideoSection'>
            <iframe className='landingVideo' src="https://www.youtube.com/embed/JWVYjKw-q7I?rel=0&autoplay=1&mute=1&controls=0&loop=1&end=25&start=5&showinfo=0&iv_load_policy=3"></iframe>
            <div className='landingVideoText'>
                <div>
                    <h1>OUT NOW</h1>
                    <h3>New MACHINE and KOMPLETE CONTROL Hardware</h3>
                    <h3>Now Available</h3>
                    <span>Learn More</span>
                </div>
            </div>
        </section>
    )
}