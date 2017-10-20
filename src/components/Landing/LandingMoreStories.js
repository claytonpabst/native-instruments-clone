import React from 'react';
import './LandingMoreStories.css';

export default function LandingMoreStories(){

        return(
            <section className='landingTeaserStoriesSection'>
                <div className='landingTeaserStoriesWrapper'>
                    <header className='landingSectionHeader'>
                        <h1>MORE STORIES</h1>
                        <h3 className='aLink'>VISIT THE BLOG</h3>
                    </header>
                    <div className='lfpContentWrapper'>
                        <div className='lmsSingleStory'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-the-essential-guide-to-signing-your-first-contract-more-stories-homepage-bb9b61144cf430112d90d1fc62b663f5-d.jpg" alt=""/>
                            <div>
                                <h1>SIGNING YOUR FIRST DEAL</h1>
                                <h3>Leading expert advice on everything you need to know about signing your first record deal.</h3>
                            </div>
                        </div>
                        <div className='lmsSingleStory'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-stud1nt-on-overcoming-the-creative-boundary-more-stories-homepage-5e858a3fa1ed021966c7abfe9f135076-d.jpg" alt=""/>
                            <div>
                                <h1>STUDIO TIPS WITH STUD1NT</h1>
                                <h3>Discwoman producer, DJ, multi-instrumentalist, stud1nt gives pointers on getting through studio sessions.</h3>
                            </div>
                        </div>
                        <div className='lmsSingleStory'>
                            <img src="https://www.native-instruments.com/typo3temp/pics/img-tile-behind-the-beats-brenk-sinatra-more-stories-homepage-f2274e093eb1b8f50cab939602dea4f6-d.jpg" alt=""/>
                            <div>
                                <h1>BRENK SINATRA INTERVIEW</h1>
                                <h3>Kabuki talks to Austrian hip hop producer Brenk Sinatra about his approach to workflow and instrumental beats.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }